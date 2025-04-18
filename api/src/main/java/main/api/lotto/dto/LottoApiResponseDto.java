package main.api.lotto.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class LottoApiResponseDto {
    String returnValue;         // API 응답 결과
    int drwNo;                  // 회차정보
    String drwNoDate;           // 추첨 일자
    int drwtNo1;                 // 첫번째 번호
    int drwtNo2;                 // 두번째 번호
    int drwtNo3;                 // 세번째 번호
    int drwtNo4;                 // 네번째 번호
    int drwtNo5;                 // 다섯번째 번호
    int drwtNo6;                 // 여섯번째 번호
    int bnusNo;                 // 보너스 번호
    long totSellamnt;           // 총 판매 금액
    int firstPrzwnerCo;         // 1등 당첨자 수
    long firstAccumamnt;        // 1등 총 상금
    long firstWinamnt;          // 1등 개별 상금

    public LottoApiResponseDto(String returnValue, int drwNo, String drwNoDate, int drwtNo1, int drwtNo2, int drwtNo3, int drwtNo4, int drwtNo5, int drwtNo6, int bnusNo, long totSellamnt, int firstPrzwnerCo, long firstAccumamnt, long firstWinamnt) {
        this.returnValue = returnValue;
        this.drwNo = drwNo;
        this.drwNoDate = drwNoDate;
        this.drwtNo1 = drwtNo1;
        this.drwtNo2 = drwtNo2;
        this.drwtNo3 = drwtNo3;
        this.drwtNo4 = drwtNo4;
        this.drwtNo5 = drwtNo5;
        this.drwtNo6 = drwtNo6;
        this.bnusNo = bnusNo;
        this.totSellamnt = totSellamnt;
        this.firstPrzwnerCo = firstPrzwnerCo;
        this.firstAccumamnt = firstAccumamnt;
        this.firstWinamnt = firstWinamnt;
    }
}
