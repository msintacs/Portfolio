package main.api.lotto.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.Iterator;

@Slf4j
@Service
@RequiredArgsConstructor
public class LottoExcelFileService {


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

            return 0;

        } catch (Exception e) {
            log.error(e.getMessage());
            return -1;
        }
    }
}
