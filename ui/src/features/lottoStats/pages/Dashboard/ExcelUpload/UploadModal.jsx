import React, { useState } from "react";

/* MUT */
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import FileUploadArea from "./FileUploadArea";
import useAsync from "../../../../../hooks/useAsync";
import { putExcelWinNum } from "../../../service/Lotto";

/* MUI */

const HtmlTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(15),
    border: "1px solid #dadde9",
  },
}));

function UploadModal({ isOpen, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [uploading, setUploading] = useState(false);

  const {
    loading,
    error: apiError,
    data,
    reFetch,
  } = useAsync(putExcelWinNum, [], true);

  if (!isOpen) return null;

  const handleOverlayKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // 모달 내부 클릭 시 외부 onClick 전파 방지용 - 접근성 고려 불필요
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleFileSelect = (file) => {
    setFileError("");
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setFileError("업로드 할 파일을 선택해주세요.");
      return;
    }

    setFileError("");
    setUploading(true);

    try {
      const res = await reFetch(selectedFile);
      if (res.code === 200) {
        alert("업로드 완료!");
      } else {
        alert("업로드 실패");
      }
      onClose();
    } catch (e) {
      alert("업로드 실패", e);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleOverlayKeyDown(e)}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="relative mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-xl"
        onClick={(e) => handleContentClick(e)}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <CloseIcon />
        </button>

        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          엑셀 파일 업로드
        </h2>

        <div className="text-sm text-gray-500">
          <p className="pb-1">
            ⚠️ 아래의 주소에서 다운 받은 파일만 업로드 가능합니다.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dhlottery.co.kr/gameResult.do?method=byWin"
            className="text-blue-600 transition hover:text-blue-800"
          >
            🔗 동행복권 당첨 내역
          </a>
        </div>

        <div className="mt-4 text-gray-600">
          <FileUploadArea
            onFileSelect={handleFileSelect}
            onError={setFileError}
            uploading={uploading}
          />
        </div>

        {selectedFile && (
          <div className="mt-4 text-sm text-green-600">
            ✔ 선택된 파일: {selectedFile.name}
          </div>
        )}

        {fileError && (
          <div className="mt-2 text-sm text-red-500">❌ {fileError}</div>
        )}

        <div className="mt-4 flex items-center justify-start">
          <HtmlTooltip
            placement="top"
            title={
              <div style={{ whiteSpace: "pre-line", lineHeight: 1.5 }}>
                동행복권 사이트에서 바로 다운 받은 엑셀 파일은 손상되어{"\n"}
                실제 .xls 형식의 파일이 아닐 수 있습니다.{"\n"}
                가급적 해당 파일을 열어 확인 후{"\n"}
                .xls 또는 .xlsx 형식으로 저장 한 후 업로드 해주세요.
              </div>
            }
          >
            <Button
              variant="outlined"
              color="error"
              size="small"
              startIcon={<HelpOutlineIcon />}
            >
              파일 업로드에 실패하는 경우
            </Button>
          </HtmlTooltip>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="rounded bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-gray-300"
          >
            저장
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-gray-300"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
