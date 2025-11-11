package main.api.lotto.exception;

public class LottoFileFormatException extends LottoFileProcessingException {
    public LottoFileFormatException(String message) {
        super(message);
    }
    public LottoFileFormatException(String message, Throwable cause) {
        super(message, cause);
    }
}
