package main.api.lotto.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "DRAW_LOTTO")
public class DrawLotto {

    @Id
    @Column(name = "DRAW_ROUND", nullable = false)
    private int drawRound;

    @Column(name = "DRAW_DATE", nullable = false)
    private LocalDate drawDate;

    @Column(name = "NUM_1", nullable = false)
    private int num1;

    @Column(name = "NUM_2", nullable = false)
    private int num2;

    @Column(name = "NUM_3", nullable = false)
    private int num3;

    @Column(name = "NUM_4", nullable = false)
    private int num4;

    @Column(name = "NUM_5", nullable = false)
    private int num5;

    @Column(name = "NUM_6", nullable = false)
    private int num6;

    @Column(name = "BONUS_NUM", nullable = false)
    private int bonusNum;

    @Column(name = "TOT_SALES_AMT")
    private long totalSalesAmount;

    @Column(name = "FST_WIN_CNT")
    private int fstWinCnt;

    @Column(name = "FST_TOT_AMT")
    private long fstTotalAmount;

    @Column(name = "FST_INDV_AMT")
    private long fstIndvAmount;

    public DrawLotto(int drawRound, LocalDate drawDate, int num1, int num2, int num3, int num4, int num5, int num6, int bonusNum, long totalSalesAmount, int fstWinCnt, long fstTotalAmount, long fstIndvAmount) {
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
}
