package main.api.lotto.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.api.common.Response;
import main.api.lotto.service.LottoExcelFileService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/lotto/excel")
@RestController
public class LottoExcelFileController {

    private final LottoExcelFileService lottoExcelFileService;

    @PostMapping("/upload")
    public Response excelFileUpload(@RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return Response.of(400, "File is empty");
        }

        try {
            log.debug("Uploading file name [{}]", file.getOriginalFilename());
            log.debug("Uploading file size [{}]", file.getSize());

            int res = lottoExcelFileService.excelFileUpload(file);

            if(res < 0) {
                return Response.of(400, "fail");
            }

            return Response.of(200, "success");

        } catch (Exception e) {
            return Response.of(400, "fail");
        }
    }
}
