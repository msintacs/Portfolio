package main.api.lotto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class PensionWinNumResponseDto {

    private int drawRound;
    private LocalDate date;

    private int winGroup;

    private int num1;
    private int num2;
    private int num3;
    private int num4;
    private int num5;
    private int num6;

    private int bDigit1;
    private int bDigit2;
    private int bDigit3;
    private int bDigit4;
    private int bDigit5;
    private int bDigit6;

    public PensionWinNumResponseDto(int drawRound, LocalDate date, int winGroup, int num1, int num2, int num3, int num4, int num5, int num6, int bDigit1, int bDigit2, int bDigit3, int bDigit4, int bDigit5, int bDigit6) {
        this.drawRound = drawRound;
        this.date = date;
        this.winGroup = winGroup;
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
        this.num6 = num6;
        this.bDigit1 = bDigit1;
        this.bDigit2 = bDigit2;
        this.bDigit3 = bDigit3;
        this.bDigit4 = bDigit4;
        this.bDigit5 = bDigit5;
        this.bDigit6 = bDigit6;
    }
}
