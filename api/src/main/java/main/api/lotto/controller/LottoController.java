package main.api.lotto.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.common.Response;
import main.api.lotto.dto.LottoLastWinNumResponseDto;
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

    /* 최신 회차 로또 번호 조회 */
    @GetMapping("/last")
    public Response getLottoLastWinNum() {

        LottoLastWinNumResponseDto responseDto = lottoService.getLottoLastWinNum();

        if (responseDto == null) {
            return Response.of(404, "No Data");
        }

        log.debug("{} ResponseDto: {}", "getLottoLastWinNum()", responseDto.toString());
        return Response.of(200, "success", "results", responseDto);
    }

    /* 과거 당첨 내역 조회 (최신 회차 제외 근 3회차) */
    @GetMapping("/recent")
    public Response getLottoRecentWinNum() {

        List<LottoLastWinNumResponseDto> responseDtos = lottoService.getLottoRecentWinNum();

        if (responseDtos == null) {
            return Response.of(404, "No Data");
        }

        for (LottoLastWinNumResponseDto dto : responseDtos) {
            log.debug("{} ResponseDto: {}", "getLottoLastWinNum()", dto.toString());
        }
        return Response.of(200, "success", "results", responseDtos);
    }
}
