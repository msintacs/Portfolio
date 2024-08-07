package main.api.Lotto.C_controller;

import lombok.RequiredArgsConstructor;
import main.api.Lotto.B_dto.CurrentLottoNumberResponseDto;
import main.api.Lotto.D_service.LottoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lotto")
@RequiredArgsConstructor
public class LottoController {

    private final LottoService lottoService;

    @GetMapping("/current")
    public CurrentLottoNumberResponseDto getCurrentLottoNumber() {
        return lottoService.getCurrentLottoNumber();
    }
}
