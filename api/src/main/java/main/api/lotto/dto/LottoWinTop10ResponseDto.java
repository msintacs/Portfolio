package main.api.lotto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LottoWinTop10ResponseDto {

    Integer number;
    Long frequency;

    public LottoWinTop10ResponseDto(Integer number, Long frequency) {
        this.number = number;
        this.frequency = frequency;
    }
}
