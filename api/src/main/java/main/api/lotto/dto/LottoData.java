package main.api.lotto.dto;

import lombok.Data;

@Data
public class LottoData {
    private int drawRound;
    private String drawDate;

    private int firstWinnerCount;
    private long firstWinAmount;

    private int secondWinnerCount;
    private long secondWinAmount;

    private int thirdWinnerCount;
    private long thirdWinAmount;

    private int fourthWinnerCount;
    private long fourthWinAmount;

    private int fifthWinnerCount;
    private long fifthWinAmount;

    private Integer[] winningNumbers;

}
