package main.api.lotto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LottoNumRangeResponseDto {

    String numRange;
    Integer count;

    public LottoNumRangeResponseDto(String numRange, Integer count) {
        this.numRange = numRange;
        this.count = count;
    }
}
