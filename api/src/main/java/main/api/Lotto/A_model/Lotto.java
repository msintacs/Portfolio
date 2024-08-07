package main.api.Lotto.A_model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/*
    NAME: LOTTO
    DESCRIPTION: 로또 당첨번호 및 당첨금액 테이블
*/
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "LOTTO")
public class Lotto {

    @Id
    @Column(name = "D_DATE")
    private LocalDateTime dDate;

    @Column(name = "ROUND")
    private int round;

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

    @Column(name = "BONUS_NUM")
    private int bonusNum;

    @Column(name = "FIRST_PRIZE")
    private int firstPrize;

    @Column(name = "SECOND_PRIZE")
    private int secondPrize;

    @Column(name = "THIRD_PRIZE")
    private int thirdPrize;

    @Column(name = "FOURTH_PRIZE")
    private int fourthPrize;

    @Column(name = "FIFTH_PRIZE")
    private int fifthPrize;
}
