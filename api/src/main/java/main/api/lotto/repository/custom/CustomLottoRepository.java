package main.api.lotto.repository.custom;

import main.api.lotto.dto.LottoWinTop10ResponseDto;

import java.util.List;

public interface CustomLottoRepository {

    List<LottoWinTop10ResponseDto> findTop10Lotto();
}
