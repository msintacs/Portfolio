package main.api.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Getter
public class Response {

    private int code;
    private String message;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Object data;

    private void setDataWithPageable(String propertyName, Page<?> data) {
        Map<String, Object> map = new HashMap<>();
        map.put(propertyName, data.getContent());
        map.put("pagination", PageableDataDto.of((PageImpl) data));
        this.data = map;
    }

    private Response(int code, String message, String propertyName, Page<?> pageableResult) {
        this.code = code;
        this.message = message;
        setDataWithPageable(propertyName, pageableResult);
    }

    private static Response of(int code, String message, String propertyName, Page<?> pageableResult) {
        return new Response(code, message, propertyName, pageableResult);
    }

    private Response(int code, String message, String propertyName, Object result) {
        this.code = code;
        this.message = message;
        Map<String, Object> map = new LinkedHashMap<>();
        map.put(propertyName, result);
        this.data = map;
    }

    public static Response of(int code, String message, String propertyName, Object result) {
        return new Response(code, message, propertyName, result);
    }

    private Response(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public static Response of(int code, String message) {
        return new Response(code, message);
    }

    @Getter
    static class PageableDataDto {
        private Long totalCount;
        private boolean sorted;
        private int currPage;
        private int totalPage;
        private int itemsPerPage;

        private PageableDataDto(PageImpl pageable) {
            this.totalCount = pageable.getTotalElements();
            this.sorted = pageable.getSort().isSorted();
            this.currPage = pageable.getPageable().getPageNumber() + 1;
            this.totalPage = pageable.getTotalPages();
            this.itemsPerPage = pageable.getPageable().getPageSize();
        }

        public static PageableDataDto of(PageImpl pageable) {
            return new PageableDataDto(pageable);
        }
    }
}
