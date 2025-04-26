package main.api.lotto.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.lotto.dto.LottoExcelSaveDto;
import main.api.lotto.model.DrawLotto;
import main.api.lotto.repository.LottoRepository;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.time.LocalDate;
import java.util.Iterator;

@Slf4j
@Service
@RequiredArgsConstructor
public class LottoExcelFileService {

    private final LottoRepository lottoRepository;

    public int excelFileUpload(MultipartFile file) {

        try {
            log.debug("Successfully read the Excel file: {}", file.getOriginalFilename());
            log.debug("Uploaded content type: {}", file.getContentType());

            // InputStream 가져오기
            InputStream inputStream = file.getInputStream();

            // InputStream 으로부터 Workbook 객체 생성
            Workbook workbook = WorkbookFactory.create(inputStream);

            // 시트 가져오기
            Sheet sheet = workbook.getSheetAt(0);

            // 시트의 행(row) 을 순회하기 위한 Iterator 가져오기
            Iterator<Row> rowIterator = sheet.iterator();

            // 헤더 스킵
            for (int i = 0; i < 3; i++) {
                if (rowIterator.hasNext()) {
                    rowIterator.next();
                } else {
                    log.warn("엑셀 파일의 데이터 시작 행 (4행) 이전에 내용이 끝났습니다.");
                    workbook.close();
                    inputStream.close();
                    return -1;
                }
            }

            // ---------------- 엑셀 파일 맵핑 Start
            while (rowIterator.hasNext()) {

                Row row = rowIterator.next();

                // 회차 (B열)
                int drawRound = -1;
                if (row.getCell(1) != null) {
                    drawRound = (int) row.getCell(1).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 회차 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 추첨일 (C열)
                String drawDateStr = null;
                if (row.getCell(2) != null) {
                    drawDateStr = (String) row.getCell(2).getStringCellValue();
                    drawDateStr = drawDateStr.replace(".", "-");
                } else {
                    log.warn("Row [{}] : 추첨일 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 1등 당첨자 수
                int fstWinCnt = -1;
                if (row.getCell(3) != null) {
                    fstWinCnt = (int) row.getCell(3).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 1등 당첨자 수 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 1등 개별 당첨 금액
                long fstIndvAmount = -1;
                if (row.getCell(4) != null) {
                    fstIndvAmount = parseMoney(row.getCell(4).getStringCellValue());
                } else {
                    log.warn("Row [{}] : 1등 개별 당첨 금액 정보가 없습니다.", row.getRowNum());
                }

                // 2등 당첨자 수
                int secWinCnt = -1;
                if (row.getCell(5) != null) {
                    secWinCnt = (int) row.getCell(5).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 2등 당첨자 수 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 2등 개별 당첨 금액
                long secIndvAmount = -1;
                if (row.getCell(6) != null) {
                    secIndvAmount = parseMoney(row.getCell(6).getStringCellValue());
                } else {
                    log.warn("Row [{}] : 2등 개별 당춤 금액 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 3등 당첨자 수
                int thrdWinCnt = -1;
                if (row.getCell(7) != null) {
                    thrdWinCnt = (int) row.getCell(7).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 3등 당첨자 수 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 3등 개별 당첨 금액
                long thrdIndvAmount = -1;
                if (row.getCell(8) != null) {
                    thrdIndvAmount = parseMoney(row.getCell(8).getStringCellValue());
                } else {
                    log.warn("Row [{}] : 3등 개별 당춤 금액 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 4등 당첨자 수
                int fourthWinCnt = -1;
                if (row.getCell(9) != null) {
                    fourthWinCnt = (int) row.getCell(9).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 4등 당첨자 수 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 4등 개별 당첨 금액
                long fourthIndvAmount = -1;
                if (row.getCell(10) != null) {
                    fourthIndvAmount = parseMoney(row.getCell(10).getStringCellValue());
                } else {
                    log.warn("Row [{}] : 4등 개별 당춤 금액 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 5등 당첨자 수
                int fifthWinCnt = -1;
                if (row.getCell(11) != null) {
                    fifthWinCnt = (int) row.getCell(11).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 5등 당첨자 수 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 5등 개별 당첨 금액
                long fifthIndvAmount = -1;
                if (row.getCell(12) != null) {
                    fifthIndvAmount = parseMoney(row.getCell(12).getStringCellValue());
                } else {
                    log.warn("Row [{}] : 5등 개별 당춤 금액 정보가 없습니다.", row.getRowNum());
                    return -2;
                }

                // 당첨번호1
                int num1 = -1;
                if (row.getCell(13) != null) {
                    num1 = (int) row.getCell(13).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 당첨번호1 정보가 없습니다.", row.getRowNum());
                }

                // 당첨번호2
                int num2 = -1;
                if (row.getCell(14) != null) {
                    num2 = (int) row.getCell(14).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 당첨번호2 정보가 없습니다.", row.getRowNum());
                }

                // 당첨번호3
                int num3 = -1;
                if (row.getCell(15) != null) {
                    num3 = (int) row.getCell(15).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 당첨번호3 정보가 없습니다.", row.getRowNum());
                }

                // 당첨번호4
                int num4 = -1;
                if (row.getCell(16) != null) {
                    num4 = (int) row.getCell(16).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 당첨번호4 정보가 없습니다.", row.getRowNum());
                }

                // 당첨번호5
                int num5 = -1;
                if (row.getCell(17) != null) {
                    num5 = (int) row.getCell(17).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 당첨번호5 정보가 없습니다.", row.getRowNum());
                }

                // 당첨번호6
                int num6 = -1;
                if (row.getCell(18) != null) {
                    num6 = (int) row.getCell(18).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 당첨번호6 정보가 없습니다.", row.getRowNum());
                }

                // 보너스 번호
                int bonusNum = -1;
                if (row.getCell(19) != null) {
                    bonusNum = (int) row.getCell(19).getNumericCellValue();
                } else {
                    log.warn("Row [{}] : 보너스번호 정보가 없습니다.", row.getRowNum());
                }


                // DTO 맵핑
                LottoExcelSaveDto lottoExcelSaveDto = new LottoExcelSaveDto(
                        drawRound,
                        drawDateStr,
                        num1,
                        num2,
                        num3,
                        num4,
                        num5,
                        num6,
                        bonusNum,
                        fstWinCnt,
                        fstIndvAmount,
                        secWinCnt,
                        secIndvAmount,
                        thrdWinCnt,
                        thrdIndvAmount,
                        fourthWinCnt,
                        fourthIndvAmount,
                        fifthWinCnt,
                        fifthIndvAmount
                );

                log.debug("LottoExcelSaveDto = {}", lottoExcelSaveDto.toString());

                // DB 에 해당 회차 정보가 있는지 조회 후 없을 경우 DB 저장
                if (!lottoRepository.existsByDrawRound(drawRound)) {
                    DrawLotto drawLotto = new DrawLotto(
                            lottoExcelSaveDto.getDrawRound(),
                            LocalDate.parse(lottoExcelSaveDto.getDrawDate()),
                            lottoExcelSaveDto.getNum1(),
                            lottoExcelSaveDto.getNum2(),
                            lottoExcelSaveDto.getNum3(),
                            lottoExcelSaveDto.getNum4(),
                            lottoExcelSaveDto.getNum5(),
                            lottoExcelSaveDto.getNum6(),
                            lottoExcelSaveDto.getBonusNum(),
                            lottoExcelSaveDto.getTotalSalesAmount(),
                            lottoExcelSaveDto.getFstWinCnt(),
                            lottoExcelSaveDto.getFstTotalAmount(),
                            lottoExcelSaveDto.getFstIndvAmount()
                    );

                    lottoRepository.save(drawLotto);

                    log.debug("DrawLotto Saved. Round=[{}]", drawRound);
                }
            }

            return 0;

        } catch (IllegalStateException e) {
            log.error("파싱 오류 (셀 타입 불일치 가능성): {}", e.getMessage());
            return -1;
        } catch (Exception e) {
            log.error("기타 예외: {}", e.getMessage());
            return -1;
        }
    }

    private long parseMoney(String moneyStr) {
        if (moneyStr == null || moneyStr.trim().isEmpty()) {
            return 0L;
        }
        return Long.parseLong(moneyStr.replace(",", "").replace("원", "").trim());
    }
}
