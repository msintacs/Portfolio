package main.api.lotto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class LottoExcelSaveDto {

    private static final int TOTLA_SALES_AMOUNT = 0;
    private static final int FST_TOTAL_AMOUNT = 1;

    private int drawRound;
    private String drawDate;

    private int num1;
    private int num2;
    private int num3;
    private int num4;
    private int num5;
    private int num6;
    private int bonusNum;

    private int fstWinCnt;
    private long fstIndvAmount;

    private long totalSalesAmount;
    private long fstTotalAmount;

    /* 계산용 */
    private int secWinCnt;
    private long secIndvAmount;

    private int thrdWinCnt;
    private long thrdIndvAmount;

    private int fourthWinCnt;
    private long fourthIndvAmount;

    private int fifthWinCnt;
    private long fifthIndvAmount;

    public LottoExcelSaveDto(int drawRound, String drawDate, int num1, int num2, int num3, int num4, int num5, int num6, int bonusNum, int fstWinCnt, long fstIndvAmount, int secWinCnt, long secIndvAmount, int thrdWinCnt, long thrdIndvAmount, int fourthWinCnt, long fourthIndvAmount, int fifthWinCnt, long fifthIndvAmount) {
        // 계산용 필드
        this.secWinCnt = secWinCnt;
        this.secIndvAmount = secIndvAmount;
        this.thrdWinCnt = thrdWinCnt;
        this.thrdIndvAmount = thrdIndvAmount;
        this.fourthWinCnt = fourthWinCnt;
        this.fourthIndvAmount = fourthIndvAmount;
        this.fifthWinCnt = fifthWinCnt;
        this.fifthIndvAmount = fifthIndvAmount;

        // DB 저장용 필드
        this.drawRound = drawRound;
        this.drawDate = drawDate;
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
        this.num6 = num6;
        this.bonusNum = bonusNum;
        this.fstWinCnt = fstWinCnt;
        this.fstIndvAmount = fstIndvAmount;
        this.totalSalesAmount = calcAmount(TOTLA_SALES_AMOUNT);
        this.fstTotalAmount = calcAmount(FST_TOTAL_AMOUNT);
    }

    private long calcAmount(int flag) {
        long res = 0;

        switch (flag) {
            case TOTLA_SALES_AMOUNT:
                res = ((this.fstWinCnt * this.fstIndvAmount) +
                      (this.secWinCnt * this.secIndvAmount) +
                      (this.thrdWinCnt * this.thrdIndvAmount) +
                      (this.fourthWinCnt * this.fourthIndvAmount) +
                      (this.fifthWinCnt * this.fifthIndvAmount)) * 2;
                return res;
            case FST_TOTAL_AMOUNT:
                res = this.fstWinCnt * this.fstIndvAmount;
                return res;
            default:
                return 0;
        }
    }
}
