package main.api.Lotto.A_model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "PENSION_LOTTERY")
public class PensionLottery {

    @Id
    @Column(name = "D_DATE")
    private LocalDateTime dDate;

    @Column(name = "ROUND")
    private int round;

    @Column(name = "W_GROUP")
    private int wGroup;

    @Column(name = "NUM1")
    private int num1;

    @Column(name = "NUM2")
    private int num2;

    @Column(name = "NUM3")
    private int num3;

    @Column(name = "NUM4")
    private int num4;

    @Column(name = "NUM5")
    private int num5;

    @Column(name = "NUM6")
    private int num6;

    @Column(name = "BONUS_NUM1")
    private int bonusNum1;

    @Column(name = "BONUS_NUM2")
    private int bonusNum2;

    @Column(name = "BONUS_NUM3")
    private int bonusNum3;

    @Column(name = "BONUS_NUM4")
    private int bonusNum4;

    @Column(name = "BONUS_NUM5")
    private int bonusNum5;

    @Column(name = "BONUS_NUM6")
    private int bonusNum6;
}
