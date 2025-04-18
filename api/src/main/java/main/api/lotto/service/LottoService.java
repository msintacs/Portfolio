package main.api.lotto.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.lotto.dto.LottoApiResponseDto;
import main.api.lotto.dto.LottoLastWinNumResponseDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.LocalDate;


@Slf4j
@Service
@RequiredArgsConstructor
public class LottoService {

    // 의존성 주입
    private final ObjectMapper objectMapper;

    // 상수
    private static final String API_CALL_URL = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=";
    private static final String CRAWLING_URL = "https://dhlottery.co.kr/common.do?method=main";
    private static final String LATEST_ROUND_SELECTOR = "strong#lottoDrwNo";

    public LottoLastWinNumResponseDto getLottoLastWinNum() {

        // 동행복권 Lotto API
        // https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=?

        String url = API_CALL_URL;
        int drawRound = getLottoRoundCrawling();

        // 반환 DTO 생성
        LottoLastWinNumResponseDto lottoLastWinNumResponseDto = null;

        // Http API 요청 객체 셋팅
        HttpClient client = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + drawRound))
                .GET()
                .build();

        try {
            // 동기 방식 요청
            log.info("===== {} API Request Started drawRound=[{}]", "getLottoLastWinNum()", drawRound);
            log.debug("Request URL: {}", url + drawRound);

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            log.info("===== {} API Request End ====", "getLottoLastWinNum()");
            log.debug("StatusCode=[{}], Response=[{}]", response.statusCode(), response.body());

            if (response.statusCode() == 200) {

                // Json Data Parsing
                String responseBody = response.body();
                LottoApiResponseDto apiResponseDto = objectMapper.readValue(responseBody, LottoApiResponseDto.class);

                if (!"success".equals(apiResponseDto.getReturnValue())) {
                    return null;
                }

                // Response DTO 로 Mapping
                lottoLastWinNumResponseDto = new LottoLastWinNumResponseDto(
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

                // DB에 해당 회차 조회 후 없을 경우 DB Insert

                return lottoLastWinNumResponseDto;

            } else {
                return null;
            }
        } catch (Exception e) {
            log.error("{} API Request Failed drawRound=[{}]", "getLottoLastWinNum()", drawRound, e);
            return lottoLastWinNumResponseDto;
        }
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
