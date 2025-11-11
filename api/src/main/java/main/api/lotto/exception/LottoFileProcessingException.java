package main.api.lotto.exception;

public class LottoFileProcessingException extends Exception {
    public LottoFileProcessingException(String message) {
        super(message);
    }

    public LottoFileProcessingException(String message, Throwable cause) {
        super(message, cause);
    }
}
