package main.api.lotto.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.lotto.dto.LottoData;
import main.api.lotto.exception.LottoDataException;
import main.api.lotto.exception.LottoFileProcessingException;
import main.api.lotto.model.DrawLotto;
import main.api.lotto.repository.LottoRepository;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.Iterator;


@Slf4j
@Service
@RequiredArgsConstructor
public class LottoExcelFileService {

    private static final int COLUMN_DRAW_ROUND = 0;                         // 회차
    private static final int COLUMN_DRAW_DATE = 1;                          // 추첨일
    private static final int COLUMN_NUM_1 = 2;                              // 당첨번호 1
    private static final int COLUMN_NUM_2 = 3;                              // 당첨번호 2
    private static final int COLUMN_NUM_3 = 4;                              // 당첨번호 3
    private static final int COLUMN_NUM_4 = 5;                              // 당첨번호 4
    private static final int COLUMN_NUM_5 = 6;                              // 당첨번호 5
    private static final int COLUMN_NUM_6 = 7;                              // 당첨번호 6
    private static final int COLUMN_BONUS_NUM = 8;                          // 보너스 번호
    private static final int COLUMN_TOTAL_SALES_AMOUNT = 9;                 // 총 판매 금액
    private static final int COLUMN_FIRST_WINNER_COUNT = 10;                // 1등 당첨자 수
    private static final int COLUMN_FIRST_WIN_AMOUNT = 11;                  // 1등 당첨 금액
    private static final int COLUMN_SECOND_WINNER_COUNT = 12;               // 2등 당첨자 수
    private static final int COLUMN_SECOND_WIN_AMOUNT = 13;                 // 2등 당첨 금액
    private static final int COLUMN_THIRD_WINNER_COUNT = 14;                // 3등 당첨자 수
    private static final int COLUMN_THIRD_WIN_AMOUNT = 15;                  // 3등 당첨 금액
    private static final int COLUMN_FOURTH_WINNER_COUNT = 16;               // 4등 당첨자 수
    private static final int COLUMN_FOURTH_WIN_AMOUNT = 17;                 // 4등 당첨 금액
    private static final int COLUMN_FIFTH_WINNER_COUNT = 18;                // 5등 당첨자 수
    private static final int COLUMN_FIFTH_WIN_AMOUNT = 19;                  // 5등 당첨 금액

    private final LottoRepository lottoRepository;

    // 헤더 행 수
    private static final int HEADER_ROWS_COUNT = 3;

    /**
     * 엑셀 파일을 업로드호가 데이터를 처리합니다.
     * @param file
     * @return
     */
    public int excelFileUpload(MultipartFile file) throws LottoFileProcessingException {

        log.debug("Successfully read Excel file: {}", file.getOriginalFilename());
        log.debug("Uploaded content type: {}", file.getContentType());

        try (InputStream inputStream = file.getInputStream();
             Workbook workbook = WorkbookFactory.create(inputStream)) {

            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rowIterator = sheet.iterator();

            // 헤더 스킵
            if (!skipHeaderRows(rowIterator)) {
                throw new LottoFileProcessingException(String.format("엑셀 파일의 데이터 시작 행 (%d행) 이전에 내용이 끝났습니다.", HEADER_ROWS_COUNT + 1));
            }

            int processedCount = processRows(rowIterator);
            log.info("엑셀 파일 업로드 완료: {} 행 처리됨", processedCount);

            return processedCount;

        } catch (IOException e) {
            throw new LottoFileProcessingException("파일 처리 중 오류가 발생했습니다", e);
        }
    }

    /**
     * 헤더 행 건너뛰기
     * @param rowIterator
     * @return
     */
    private boolean skipHeaderRows(Iterator<Row> rowIterator) {
        for (int i = 0; i < HEADER_ROWS_COUNT; i++) {

            if (!rowIterator.hasNext()) {
                return false;
            }
            rowIterator.next();
        }
        return true;
    }

    /**
     * 행 데이터 처리
     * @param rowIterator
     * @return
     * @throws LottoDataException
     */
    private int processRows(Iterator<Row> rowIterator) {
        int processedCount = 0;
        int errorCount = 0;

        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            try {
                LottoData lottoData = extractLottoData(row);
                saveLottoData(lottoData);
                processedCount++;
            } catch (LottoDataException e) {
                errorCount++;
                log.error("행 [{}]에서 데이터 처리 오류: {}", row.getRowNum(), e.getMessage());
            }
        }

        log.info("총 처리 행 수: {}, 성공: {}, 실패: {}", processedCount + errorCount, processedCount, errorCount);
        return processedCount;
    }

    /**
     * 로또 데이터 저장
     * @param data
     */
    private void saveLottoData(LottoData data) {
        // 이미 존재하는 회차인지 확인
        if (!lottoRepository.existsById(data.getDrawRound())) {

            DrawLotto drawLotto = new DrawLotto();
            drawLotto.setDrawRound(data.getDrawRound());
            drawLotto.setDrawDate(LocalDate.parse(data.getDrawDate()));

            // 당첨 번호 설정
            if (data.getWinningNumbers() != null && data.getWinningNumbers().length >= 7) {
                drawLotto.setNum1(data.getWinningNumbers()[0]);
                drawLotto.setNum2(data.getWinningNumbers()[1]);
                drawLotto.setNum3(data.getWinningNumbers()[2]);
                drawLotto.setNum4(data.getWinningNumbers()[3]);
                drawLotto.setNum5(data.getWinningNumbers()[4]);
                drawLotto.setNum6(data.getWinningNumbers()[5]);
                drawLotto.setBonusNum(data.getWinningNumbers()[6]);
            }

            // 당첨자 정보 설정
            drawLotto.setFstWinCnt(data.getFirstWinnerCount());
            drawLotto.setFstIndvAmount(data.getFirstWinAmount());
            drawLotto.setFstTotalAmount(data.getFirstWinAmount() * data.getFifthWinnerCount());

            lottoRepository.save(drawLotto);

            log.debug("DrawLotto Saved. Round=[{}]", data.getDrawRound());
        } else {
            log.debug("DrawLotto Already Exists. Round=[{}]", data.getDrawRound());
        }
    }

    /**
     * 행에서 로또 데이처 추출.
     * @param row                       엑셀 행
     * @return                          추출된 로또 데이터
     * @throws LottoDataException       데이터 추출 실패 시
     */
    private LottoData extractLottoData(Row row) throws LottoDataException, IllegalStateException {
        LottoData data = new LottoData();

        // 회차 및 추첨일 추출
        extractDrawInfo(row, data);

        // 당첨 번호 추출
        extractWinningNumbers(row, data);

        // 당첨 정보 추출
        extractWinnerInfo(row, data);

        return data;
    }

    /**
     * 회차 및 추첨일 정보 추출
     * @param row                       엑셀 행
     * @param data                      로또 데이터 객체
     * @throws LottoDataException       데이터 추출 실패 시
     */
    private void extractDrawInfo(Row row, LottoData data) throws LottoDataException {
        int drawRound = getIntCellValue(row, COLUMN_DRAW_ROUND, "회차");
        String drawDate = getStringCellValueAndFormat(row, COLUMN_DRAW_DATE, "추첨일");
        data.setDrawRound(drawRound);
        data.setDrawDate(drawDate);
    }

    private void extractWinningNumbers(Row row, LottoData data) throws LottoDataException {

        Integer[]  winningNumbers = new Integer[6];
        winningNumbers[0] = getIntCellValue(row, COLUMN_NUM_1, "당첨번호1");
        winningNumbers[1] = getIntCellValue(row, COLUMN_NUM_2, "당첨번호2");
        winningNumbers[2] = getIntCellValue(row, COLUMN_NUM_3, "당첨번호3");
        winningNumbers[3] = getIntCellValue(row, COLUMN_NUM_4, "당첨번호4");
        winningNumbers[4] = getIntCellValue(row, COLUMN_NUM_5, "당첨번호5");
        winningNumbers[5] = getIntCellValue(row, COLUMN_NUM_6, "당첨번호6");

        data.setWinningNumbers(winningNumbers);

        int bounsNum = getIntCellValue(row, COLUMN_BONUS_NUM, "보너스번호");
    }

    private void extractWinnerInfo(Row row, LottoData data) throws LottoDataException {
        // 1등 당첨 정보
        data.setFirstWinnerCount(getIntCellValue(row, COLUMN_FIRST_WINNER_COUNT, "1등 당첨자 수"));
        data.setFirstWinAmount(getMoneyValue(row, COLUMN_FIRST_WIN_AMOUNT, "1등 당첨금액", true));

        // 2등 당첨 정보
        data.setSecondWinnerCount(getIntCellValue(row, COLUMN_SECOND_WINNER_COUNT, "2등 당첨자 수"));
        data.setSecondWinAmount(getMoneyValue(row, COLUMN_SECOND_WIN_AMOUNT, "2등 당첨금액", true));

        // 3등 당첨 정보
        data.setThirdWinnerCount(getIntCellValue(row, COLUMN_THIRD_WINNER_COUNT, "3등 당첨자 수"));
        data.setThirdWinAmount(getMoneyValue(row, COLUMN_THIRD_WIN_AMOUNT, "3등 당첨금액", true));

        // 4등 당첨 정보
        data.setFourthWinnerCount(getIntCellValue(row, COLUMN_FOURTH_WINNER_COUNT, "4등 당첨자 수"));
        data.setFourthWinAmount(getMoneyValue(row, COLUMN_FOURTH_WIN_AMOUNT, "4등 당첨금액", true));

        // 5등 당첨 정보
        data.setFifthWinnerCount(getIntCellValue(row, COLUMN_FIFTH_WINNER_COUNT, "5등 당첨자 수"));
        data.setFifthWinAmount(getMoneyValue(row, COLUMN_FIFTH_WIN_AMOUNT, "5등 당첨금액", true));
    }

    /**
     * 셀에서 정수 값을 가져오기 (필수 필드 처리)
     * @param row                               엑셀 행
     * @param cellIndex                         셀 인덱스
     * @param fieldName                         필드 이름 (오류 메시지용)
     * @return                                  추출된 정수 값
     * @throws LottoDataException               값 추출 실패시
     */
    private int getIntCellValue(Row row, int cellIndex, String fieldName) throws LottoDataException {
        return getIntCellValue(row, cellIndex, fieldName, true);
    }

    /**
     * 셀에서 정수 값을 가져오기
     * @param row                               엑셀 행
     * @param cellIndex                         셀 인덱스
     * @param fieldName                         필드 이름 (오류 메시지용)
     * @param required                          필수 필드 여부
     * @return                                  추출된 정수 값
     * @throws LottoDataException               값 추출 실패시
     */
    private int getIntCellValue(Row row, int cellIndex, String fieldName, boolean required) throws LottoDataException {
        Cell cell = row.getCell(cellIndex);
        if (cell == null) {
            if (required) {
                throw new LottoDataException(fieldName + " 셀이 비어있습니다.");
            } else {
                return 0; // 필수가 아닌 경우 기본값 0 반환
            }
        }

        try {
            if (cell.getCellType() == CellType.NUMERIC) {
                return (int) cell.getNumericCellValue();
            } else if (cell.getCellType() == CellType.STRING) {
                String value = cell.getStringCellValue().trim();
                if (value.isEmpty()) {
                    if (required) {
                        throw new LottoDataException(fieldName + " 값이 비어있습니다.");
                    } else {
                        return 0;
                    }
                }
                try {
                    return Integer.parseInt(value);
                } catch (NumberFormatException e) {
                    throw new LottoDataException(fieldName + " 값을 정수로 변환할 수 없습니다: " + value);
                }
            } else {
                throw new LottoDataException(fieldName + " 셀 타입이 지원되지 않습니다: " + cell.getCellType());
            }
        } catch (LottoDataException e) {
            throw e;
        } catch (Exception e) {
            throw new LottoDataException(fieldName + " 값 추출 중 오류 발생: " + e.getMessage(), e);
        }
    }


    /**
     * 셀에서 문자열 값 가져오기 + 형식 지정
     * @param row
     * @param cellIndex
     * @param fieldName
     * @return
     * @throws LottoDataException
     */
    private String getStringCellValueAndFormat(Row row, int cellIndex, String fieldName) throws LottoDataException {
        Cell cell = row.getCell(cellIndex);
        if (cell == null) {
            throw new LottoDataException(fieldName + " 정보가 없습니다");
        }
        String value = cell.getStringCellValue();
        return value.replace(".", "-");
    }

    /**
     * 셀에서 금액 가져오기.
     * @param row
     * @param cellIndex
     * @param fieldName
     * @param required
     * @return
     * @throws LottoDataException
     */
    private long getMoneyValue(Row row, int cellIndex, String fieldName, boolean required) throws LottoDataException {
        Cell cell = row.getCell(cellIndex);
        if (cell == null) {
            if (required) {
                throw new LottoDataException(fieldName + " 정보가 없습니다");
            }
            return -1;
        }
        return parseMoney(cell.getStringCellValue());
    }

    /**
     * 금액 문자열을 숫자로 파싱
     * @param moneyStr
     * @return
     */
    private long parseMoney(String moneyStr) {
        // 기존 parseMoney 메소드 구현
        return Long.parseLong(moneyStr.replaceAll("\\D", ""));
    }
}
