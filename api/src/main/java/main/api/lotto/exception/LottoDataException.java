package main.api.lotto.exception;

public class LottoDataException extends LottoFileProcessingException {
    public LottoDataException(String message) {
        super(message);
    }
    public LottoDataException(String message, Throwable cause) {
        super(message, cause);
    }
}
