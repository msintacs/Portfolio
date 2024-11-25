package main.api.Lotto.B_dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CurrentLottoNumberResponseDto {

    /* Lotto 6/45 */
    private String lotRound;
    private String lotDate;
    private String lotNum1;
    private String lotNum2;
    private String lotNum3;
    private String lotNum4;
    private String lotNum5;
    private String lotNum6;
    private String lotBonusNum;

    /* 연금복권720+ */
    private String penGroup;
    private String penDate;
    private String penNum1;
    private String penNum2;
    private String penNum3;
    private String penNum4;
    private String penNum5;
    private String penNum6;
    private String penBonusNum1;
    private String penBonusNum2;
    private String penBonusNum3;
    private String penBounsNum4;
    private String penBounsNum5;
    private String penBonusNum6;

    public CurrentLottoNumberResponseDto(String lotRound, String lotDate, String lotNum1, String lotNum2, String lotNum3, String lotNum4, String lotNum5, String lotNum6, String lotBonusNum, String penGroup, String penDate, String penNum1, String penNum2, String penNum3, String penNum4, String penNum5, String penNum6, String penBonusNum1, String penBonusNum2, String penBonusNum3, String penBounsNum4, String penBounsNum5, String penBonusNum6) {
        this.lotRound = lotRound;
        this.lotDate = lotDate;
        this.lotNum1 = lotNum1;
        this.lotNum2 = lotNum2;
        this.lotNum3 = lotNum3;
        this.lotNum4 = lotNum4;
        this.lotNum5 = lotNum5;
        this.lotNum6 = lotNum6;
        this.lotBonusNum = lotBonusNum;
        this.penGroup = penGroup;
        this.penDate = penDate;
        this.penNum1 = penNum1;
        this.penNum2 = penNum2;
        this.penNum3 = penNum3;
        this.penNum4 = penNum4;
        this.penNum5 = penNum5;
        this.penNum6 = penNum6;
        this.penBonusNum1 = penBonusNum1;
        this.penBonusNum2 = penBonusNum2;
        this.penBonusNum3 = penBonusNum3;
        this.penBounsNum4 = penBounsNum4;
        this.penBounsNum5 = penBounsNum5;
        this.penBonusNum6 = penBonusNum6;
    }
}
