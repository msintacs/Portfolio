package main.api.lotto.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.common.Response;
import main.api.lotto.dto.LottoNumRangeResponseDto;
import main.api.lotto.dto.LottoWinNumResponseDto;
import main.api.lotto.dto.LottoWinTop10ResponseDto;
import main.api.lotto.service.LottoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Slf4j
@RequiredArgsConstructor
@RequestMapping("/lotto")
@RestController
public class LottoController {

    private final LottoService lottoService;

    /* 전체 데이터 */
    @GetMapping("")
    public Response getAllLotto() {

        List<LottoWinNumResponseDto> responseDtos = lottoService.getAllLotto();

        if (responseDtos.isEmpty()) {
            return Response.of(404, "No Data");
        }

        return Response.of(200, "success", "results", responseDtos);
    }

    /* 최신 회차 로또 번호 조회 */
    @GetMapping("/last")
    public Response getLottoLastWinNum() {

        LottoWinNumResponseDto responseDto = lottoService.getLottoLastWinNum();

        if (responseDto == null) {
            return Response.of(404, "No Data");
        }

        log.debug("{} ResponseDto: {}", "getLottoLastWinNum()", responseDto.toString());
        return Response.of(200, "success", "results", responseDto);
    }

    /* 과거 당첨 내역 조회 (최신 회차 제외 근 3회차) */
    @GetMapping("/recent")
    public Response getLottoRecentWinNum() {

        List<LottoWinNumResponseDto> responseDtos = lottoService.getLottoRecentWinNum();

        if (responseDtos.isEmpty()) {
            return Response.of(404, "No Data");
        }

        for (LottoWinNumResponseDto dto : responseDtos) {
            log.debug("{} ResponseDto: {}", "getLottoLastWinNum()", dto.toString());
        }
        return Response.of(200, "success", "results", responseDtos);
    }

    /* 번호별 당첨 빈도 TOP 10 */
    @GetMapping("/top10")
    public Response getLottoTop10() {
        List<LottoWinTop10ResponseDto> responseDtos = lottoService.getLottoTop10();

        if (responseDtos.isEmpty()) {
            return Response.of(404, "No Data");
        }

        return Response.of(200, "success", "results", responseDtos);
    }

    /* 번호 대역별 분포 */
    @GetMapping("/numrange")
    public Response getNumRangeDistribution() {
        List<LottoNumRangeResponseDto> responseDtos = lottoService.getNumRangeDistribution();

        if (responseDtos.isEmpty()) {
            return Response.of(404, "No Data");
        }

        return Response.of(200, "success", "results", responseDtos);
    }
}
