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
@Table(name = "DRAW_PENSION")
public class DrawPension {

    @Id
    @Column(name = "DRAW_ROUND", nullable = false)
    private int drawRound;

    @Column(name = "DRAW_DATE", nullable = false)
    private LocalDate drawDate;

    @Column(name = "WIN_GROUP", nullable = false)
    private int winGroup;

    @Column(name = "NUM_1", nullable = false )
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

    @Column(name = "B_DIGIT_1", nullable = false)
    private int bDigit1;

    @Column(name = "B_DIGIT_2", nullable = false)
    private int bDigit2;

    @Column(name = "B_DIGIT_3", nullable = false)
    private int bDigit3;

    @Column(name = "B_DIGIT_4", nullable = false)
    private int bDigit4;

    @Column(name = "B_DIGIT_5", nullable = false)
    private int bDigit5;

    @Column(name = "B_DIGIT_6", nullable = false)
    private int bDigit6;
}
