package main.api.lotto.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class LottoExcelSaveDto {

    private final int TOTLA_SALES_AMOUNT = 0;
    private final int FST_TOTLA_AMOUNT = 1;

    private int drawRound;
    private String drawData;

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

    private int thrdCnt;
    private long thrdIndvAmount;

    private int fourthCnt;
    private long fourthIndvAmount;

    private int fifthCnt;
    private long fifthIndvAmount;

    public LottoExcelSaveDto(int drawRound, String drawData, int num1, int num2, int num3, int num4, int num5, int num6, int bonusNum, int fstWinCnt, long fstIndvAmount, int secWinCnt, int secIndvAmount, int thrdCnt, int thrdIndvAmount, int fourthCnt, int fourthIndvAmount, int fifthCnt, int fifthIndvAmount) {
        // DB 저장용 필드
        this.drawRound = drawRound;
        this.drawData = drawData;
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
        this.num6 = num6;
        this.bonusNum = bonusNum;
        this.totalSalesAmount = calcAmount(TOTLA_SALES_AMOUNT);
        this.fstWinCnt = fstWinCnt;
        this.fstTotalAmount = calcAmount(FST_TOTLA_AMOUNT);
        this.fstIndvAmount = fstIndvAmount;

        // 계산용 필드
        this.secWinCnt = secWinCnt;
        this.secIndvAmount = secIndvAmount;
        this.thrdCnt = thrdCnt;
        this.thrdIndvAmount = thrdIndvAmount;
        this.fourthCnt = fourthCnt;
        this.fourthIndvAmount = fourthIndvAmount;
        this.fifthCnt = fifthCnt;
        this.fifthIndvAmount = fifthIndvAmount;
    }

    private long calcAmount(int flag) {
        long res = 0;

        switch (flag) {
            case TOTLA_SALES_AMOUNT:
                res = ((this.fstWinCnt * this.fstIndvAmount) +
                      (this.secWinCnt * this.secIndvAmount) +
                      (this.thrdCnt * this.thrdIndvAmount) +
                      (this.fourthCnt * this.fourthIndvAmount) +
                      (this.fifthCnt * this.fifthIndvAmount)) * 2;
                return res;
            case FST_TOTLA_AMOUNT:
                res = this.fstWinCnt * this.fstIndvAmount;
                return res;
            default:
                return 0;
        }
    }
}
