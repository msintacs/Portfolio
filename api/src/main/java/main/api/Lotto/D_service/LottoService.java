package main.api.Lotto.D_service;

import main.api.Lotto.B_dto.CurrentLottoNumberResponseDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.TemporalAdjusters;

@Service
public class LottoService {

    // https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=회차번호

    public CurrentLottoNumberResponseDto getCurrentLottoNumber() {

        // 리스폰 객체 생성
        CurrentLottoNumberResponseDto responseDto = new CurrentLottoNumberResponseDto();

        // 크롤링 Start -----------------------------------------------------
        String URL = "https://dhlottery.co.kr/common.do?method=main";
        Document doc;

        try {
            doc = Jsoup.connect(URL).get();

            /* Lotto */
            responseDto.setLotRound(doc.select("#lottoDrwNo").text());
            responseDto.setLotNum1(doc.select("#drwtNo1").text());
            responseDto.setLotNum2(doc.select("#drwtNo2").text());
            responseDto.setLotNum3(doc.select("#drwtNo3").text());
            responseDto.setLotNum4(doc.select("#drwtNo4").text());
            responseDto.setLotNum5(doc.select("#drwtNo5").text());
            responseDto.setLotNum6(doc.select("#drwtNo6").text());
            responseDto.setLotBonusNum(doc.select("#bnusNo").text());

            /* 추첨 날짜 구하기 */
            LocalDateTime currentDateTime = LocalDateTime.now();
            LocalDateTime saturday  = currentDateTime.with(TemporalAdjusters.previousOrSame(DayOfWeek.SATURDAY));

            boolean isTodaySaturday = currentDateTime.getDayOfWeek() == DayOfWeek.SATURDAY;

            if (isTodaySaturday) {
                if (currentDateTime.toLocalTime().isBefore(LocalTime.of(21, 00))) {
                    saturday = saturday.minusWeeks(1);
                }
            }

            responseDto.setLotDate(saturday.toString().split("T")[0]);

            /* 연금 */
            Elements win720 = doc.select("#win720");

            responseDto.setPenGroup(
                    win720.select(".group").select(".num").select("span").get(0).text()
            );
            responseDto.setPenNum1(win720.select(".al720_color1").get(0).text());
            responseDto.setPenNum2(win720.select(".al720_color2").get(0).text());
            responseDto.setPenNum3(win720.select(".al720_color3").get(0).text());
            responseDto.setPenNum4(win720.select(".al720_color4").get(0).text());
            responseDto.setPenNum5(win720.select(".al720_color5").get(0).text());
            responseDto.setPenNum6(win720.select(".al720_color6").get(0).text());

            responseDto.setPenBonusNum1(win720.select(".al720_color1").get(2).text());
            responseDto.setPenBonusNum2(win720.select(".al720_color2").get(2).text());
            responseDto.setPenBonusNum3(win720.select(".al720_color3").get(2).text());
            responseDto.setPenBounsNum4(win720.select(".al720_color4").get(2).text());
            responseDto.setPenBounsNum5(win720.select(".al720_color5").get(2).text());
            responseDto.setPenBonusNum6(win720.select(".al720_color6").get(2).text());

            /* 추첨 날짜 구하기 */
            LocalDateTime thursday  = currentDateTime.with(TemporalAdjusters.previousOrSame(DayOfWeek.THURSDAY));

            boolean isTodayThursday = currentDateTime.getDayOfWeek() == DayOfWeek.THURSDAY;

            if (isTodayThursday) {
                if (currentDateTime.toLocalTime().isBefore(LocalTime.of(19, 30))) {
                    thursday = thursday.minusWeeks(1);
                }
            }

            responseDto.setPenDate(thursday.toString().split("T")[0]);

        } catch (IOException e) {
            e.printStackTrace();
        }
        // 크롤링 End -------------------------------------------------------

        return responseDto;
    }
}
