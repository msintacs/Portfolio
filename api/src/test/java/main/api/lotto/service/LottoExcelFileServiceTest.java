package main.api.lotto.service;

import main.api.lotto.model.DrawLotto;
import main.api.lotto.repository.LottoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockMultipartFile;

import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.any;

import java.io.IOException;
import java.io.InputStream;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class LottoExcelFileServiceTest {

    @Mock
    private LottoRepository lottoRepository;

    @InjectMocks LottoExcelFileService lottoExcelFileService;

    @BeforeEach
    void setUp() {

    }

    @Test
    void excelFileUpload_정상_엑셀_파일_테스트() throws Exception {
        //givne
        // 테스트용 엑셀 파일 준비
        InputStream inputStream = getClass().getResourceAsStream("test-data/lotto_data_test.xlsx");
        assertNotNull(inputStream, "테스트 엑셀 파일을 찾을 수 없습니다.");

        MockMultipartFile file = new MockMultipartFile(
                "file",
                "lotto_data_test.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                inputStream
        );

        // DrawLotto 저장 성공 시 엔티티 그대로 반환하도록 설정
        when(lottoRepository.save(any(DrawLotto.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // when
        int processedRows = lottoExcelFileService.excelFileUpload(file);

        // then
        assertTrue(processedRows > 0, "처리된 행이 없습니다");
        verify(lottoRepository, atLeastOnce()).save(any(DrawLotto.class));
    }

    @Test
    void excelFileUpload_빈_파일_테스트() {
        MockMultipartFile emptyFile = new MockMultipartFile(
                "file",
                "empty.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                new byte[0]
        );

        // when & then
        Exception exception = assertThrows(
                Exception.class, () -> lottoExcelFileService.excelFileUpload(emptyFile)
        );

        assertTrue(exception.getMessage().contains("파일") ||
                        exception.getMessage().contains("비어") ||
                        exception.getMessage().contains("오류"),
                "예외 메시지가 예상과 다릅니다: " + exception.getMessage());
    }

    @Test
    void excelFileUpload_잘못된_형식의_엑셀_테스트() throws IOException {
        // givne
        // 텍스트 파일을 엑셀 파일로 위장
        MockMultipartFile invalidFile = new MockMultipartFile(
                "file",
                "invalid.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "이것은 엑셀 파일이 아닙니다.".getBytes()
        );

        // when && then
        Exception exception = assertThrows(
                Exception.class, () -> lottoExcelFileService.excelFileUpload(invalidFile)
        );

        assertTrue(exception.getMessage().contains("형식") ||
                        exception.getMessage().contains("포맷") ||
                        exception.getMessage().contains("파일"),
                "예외 메시지가 예상과 다릅니다: " + exception.getMessage());
    }

    @Test
    void excelFileUpload_잘못된_데이터_엑셀_테스트() throws IOException {
        // given
        // 잘못된 데이터가 포함된 테스트 엑셀 파일
        InputStream inputStream = getClass().getResourceAsStream("test-data/lotto_invalid_data_test.xlsx");

        assertNotNull(inputStream, "잘못된 데이터 테스트 엑셀 파일을 찾을 수 없습니다.");

        MockMultipartFile file = new MockMultipartFile(
                "file",
                "lotto_invalid_data_test.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                inputStream
        );

        when(lottoRepository.save(any(DrawLotto.class))).thenAnswer
                (invocation -> {
                    DrawLotto lotto = invocation.getArgument(0);
                    if (lotto.getDrawRound() < 0) {
                        throw new RuntimeException("잘못된 회차 번호입니다.");
                    }
                    return lotto;
                });

        // when & then - 처리 방식에 따라 달라질 수 있음
        // 1. 예외가 발생하면 전체 처리를 중단하는 경우
        Exception exception = assertThrows(Exception.class, () -> lottoExcelFileService.excelFileUpload(file));

        // 또는
        // 2. 가능한 행은 처리하고 건너뛰는 경우
        // int processRows = lottoExcelFileService.excelFileUpload(file);
        // assertTrue(processedRows > 0 && processedRows < 총행수);
    }
}