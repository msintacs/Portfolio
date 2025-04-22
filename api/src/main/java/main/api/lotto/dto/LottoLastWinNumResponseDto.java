package main.api.lotto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import main.api.lotto.model.DrawLotto;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@ToString
public class LottoLastWinNumResponseDto {

    private int drawRound;
    private LocalDate drawDate;

    private int num1;
    private int num2;
    private int num3;
    private int num4;
    private int num5;
    private int num6;
    private int bonusNum;

    private long totalSalesAmount;
    private int fstWinCnt;
    private long fstTotalAmount;
    private long fstIndvAmount;

    public LottoLastWinNumResponseDto(int drawRound, LocalDate drawDate, int num1, int num2, int num3, int num4, int num5, int num6, int bonusNum, long totalSalesAmount, int fstWinCnt, long fstTotalAmount, long fstIndvAmount) {
        this.drawRound = drawRound;
        this.drawDate = drawDate;
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
        this.num6 = num6;
        this.bonusNum = bonusNum;
        this.totalSalesAmount = totalSalesAmount;
        this.fstWinCnt = fstWinCnt;
        this.fstTotalAmount = fstTotalAmount;
        this.fstIndvAmount = fstIndvAmount;
    }

    public LottoLastWinNumResponseDto(DrawLotto drawLotto) {
        this.drawRound = drawLotto.getDrawRound();
        this.drawDate = drawLotto.getDrawDate();
        this.num1 = drawLotto.getNum1();
        this.num2 = drawLotto.getNum2();
        this.num3 = drawLotto.getNum3();
        this.num4 = drawLotto.getNum4();
        this.num5 = drawLotto.getNum5();
        this.num6 = drawLotto.getNum6();
        this.bonusNum = drawLotto.getBonusNum();
        this.totalSalesAmount = drawLotto.getTotalSalesAmount();
        this.fstWinCnt = drawLotto.getFstWinCnt();
        this.fstTotalAmount = drawLotto.getFstTotalAmount();
        this.fstIndvAmount = drawLotto.getFstIndvAmount();
    }
}
