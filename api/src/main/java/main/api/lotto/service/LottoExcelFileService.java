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
     * @param row
     * @return
     * @throws LottoDataException
     */
    private LottoData extractLottoData(Row row) throws LottoDataException, IllegalStateException {
        LottoData data = new LottoData();

        // 회차 (B열)
        data.setDrawRound(getIntCellValue(row, 1, "회차"));

        // 추첨일 (C열)
        data.setDrawDate(getStringCellValueAndFormat(row, 2, "추첨일"));

        // 1등 당첨 정보
        data.setFirstWinnerCount(getIntCellValue(row, 3, "1등 당첨자 수"));
        // 👇 try-catch 제거
        data.setFirstWinAmount(getMoneyValue(row, 4, "1등 개별 당첨 금액", false));

        // 2등 당첨 정보 (모두 required=true 로 변경)
        data.setSecondWinnerCount(getIntCellValue(row, 5, "2등 당첨자 수", true));
        data.setSecondWinAmount(getMoneyValue(row, 6, "2등 개별 당첨 금액", true));

        // 3등 당첨 정보 (모두 required=true 로 변경)
        data.setThirdWinnerCount(getIntCellValue(row, 7, "3등 당첨자 수", true));
        data.setThirdWinAmount(getMoneyValue(row, 8, "3등 개별 당첨 금액", true));

        // 4등 당첨 정보 (모두 required=true 로 변경)
        data.setFourthWinnerCount(getIntCellValue(row, 9, "4등 당첨자 수", true));
        data.setFourthWinAmount(getMoneyValue(row, 10, "4등 개별 당첨 금액", true));

        // 5등 당첨 정보 (모두 required=true 로 변경)
        data.setFifthWinnerCount(getIntCellValue(row, 11, "5등 당첨자 수", true));
        data.setFifthWinAmount(getMoneyValue(row, 12, "5등 개별 당첨 금액", true));

        // 당첨 번호 (보너스 번호 포함 7개)
        Integer[] winningNumbers = new Integer[7];
        for (int i = 0; i < 6; i++) {
            winningNumbers[i] = getIntCellValue(row, 13 + i, "당첨번호" + (i + 1), false);
        }

        winningNumbers[6] = getIntCellValue(row, 19, "보너스번호", false);

        data.setWinningNumbers(winningNumbers);

        return data;
    }

    /**
     * 셀에서 정수 값을 가져오기.
     * @param row
     * @param cellIndex
     * @param fieldName
     * @return
     * @throws LottoDataException
     */
    private int getIntCellValue(Row row, int cellIndex, String fieldName) throws LottoDataException {
        return getIntCellValue(row, cellIndex, fieldName, true);
    }

    private int getIntCellValue(Row row, int cellIndex, String fieldName, boolean required) throws LottoDataException {
        Cell cell = row.getCell(cellIndex);
        if (cell == null) {
            if (required) {
                throw new LottoDataException(fieldName + " 정보가 없습니다");
            }
            return -1;
        }
        return (int) cell.getNumericCellValue();
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
