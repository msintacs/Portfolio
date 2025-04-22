package main.api.lotto.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.lotto.dto.LottoApiResponseDto;
import main.api.lotto.dto.LottoLastWinNumResponseDto;
import main.api.lotto.model.DrawLotto;
import main.api.lotto.repository.LottoRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class LottoService {

    // 의존성 주입
    private final ObjectMapper objectMapper;
    private final LottoRepository lottoRepository;

    // 상수
    private static final String API_CALL_URL = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=";
    private static final String CRAWLING_URL = "https://dhlottery.co.kr/common.do?method=main";
    private static final String LATEST_ROUND_SELECTOR = "strong#lottoDrwNo";

    public LottoLastWinNumResponseDto getLottoLastWinNum() {
        int drawRound = getLottoRoundCrawling();
        Optional<DrawLotto> optionalDrawLotto = lottoRepository.findById(drawRound);

        // 이미 DB에 존재할 경우, 바로 반환
        if (optionalDrawLotto.isPresent()) {
            return new LottoLastWinNumResponseDto(optionalDrawLotto.get());
        }

        // API 요청
        String url = API_CALL_URL + drawRound;

        HttpClient client = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))

                .GET()
                .build();

        try {
            log.info("===== {} ===== API Request Started drawRound=[{}]", "getLottoLastWinNum()", drawRound);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            log.info("===== {} ===== API Request End", "getLottoLastWinNum()");
            log.debug("StatusCode=[{}], Response=[{}]", response.statusCode(), response.body());

            if (response.statusCode() != 200) {
                return null;
            }

            // JSON 파싱 → DTO
            LottoApiResponseDto apiResponseDto = objectMapper.readValue(response.body(), LottoApiResponseDto.class);
            if (!"success".equals(apiResponseDto.getReturnValue())) {
                return null;
            }

            // DB 저장 엔티티 생성
            DrawLotto drawLottoToSave = new DrawLotto(
                    apiResponseDto.getDrwNo(),
                    LocalDate.parse(apiResponseDto.getDrwNoDate()),
                    apiResponseDto.getDrwtNo1(),
                    apiResponseDto.getDrwtNo2(),
                    apiResponseDto.getDrwtNo3(),
                    apiResponseDto.getDrwtNo4(),
                    apiResponseDto.getDrwtNo5(),
                    apiResponseDto.getDrwtNo6(),
                    apiResponseDto.getBnusNo(),
                    apiResponseDto.getTotSellamnt(),
                    apiResponseDto.getFirstPrzwnerCo(),
                    apiResponseDto.getFirstAccumamnt(),
                    apiResponseDto.getFirstWinamnt()
            );

            // DB 저장
            lottoRepository.save(drawLottoToSave);
            log.info("DrawLotto Saved, drawRound=[{}]", drawLottoToSave.getDrawRound());

            // 리턴 DTO 반환
            return new LottoLastWinNumResponseDto(drawLottoToSave);

        } catch (Exception e) {
            log.error("{} API Request Failed drawRound=[{}]", "getLottoLastWinNum()", drawRound, e);
            return null;
        }
    }


    public List<LottoLastWinNumResponseDto> getLottoRecentWinNum() {

        Pageable pageable = PageRequest.of(0, 4, Sort.by(Sort.Direction.DESC, "drawRound"));
        Page<DrawLotto> pageResult = lottoRepository.findRecentExcludingFirstOrderByIdxDesc(pageable);
        List<DrawLotto> drawLottos = pageResult.getContent();
        List<LottoLastWinNumResponseDto> responseDtos = drawLottos.stream().skip(1).map(data -> new LottoLastWinNumResponseDto(data)).collect(Collectors.toList());

        return responseDtos;
    }

    // Lotto 최신 회차
    private int getLottoRoundCrawling() {

        int drawRound = 0;

        log.info("{} drawRound Crawling Start...", "getLottoRoundCrawling()");

        try {

            Document doc = Jsoup.connect(CRAWLING_URL).timeout(10000).get();
            Element roundElement = doc.selectFirst(LATEST_ROUND_SELECTOR);

            if (roundElement != null) {
                String roundText = roundElement.text();
                log.debug("{} roundText=[{}]", "getLottoRoundCrawling()", roundText);

                String roundNumberStr = roundText.replaceAll("[^0-9]", "");
                if (!roundNumberStr.isEmpty()) {
                    return Integer.parseInt(roundNumberStr);
                } else {
                    log.error("{} Passing Failed.", "getLottoRoundCrawling()");
                    return 0;
                }
            }

        } catch (Exception e) {
            log.error("{} Crawling Failed.", "getLottoRoundCrawling()", e);
        }

        return drawRound;
    }
}
