import React, { useRef, useState } from "react";

// 허용 가능 확장자 상수 선언
const ALLOWED_EXTENSIONS = ["xlsx", "xls", "csv"];

function FileUploadArea({ onFileSelect, onError, uploading }) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef();

  // 파일 확장자 유효성 검사
  const validateFile = (file) => {
    const ext = file.name.split(".").pop().toLowerCase();
    return ALLOWED_EXTENSIONS.includes(ext);
  };

  const handleFile = (fileList) => {
    const file = fileList[0];
    if (!file) return;

    if (validateFile(file)) {
      onFileSelect(file);
    } else {
      onError(".xlsx, .xls, .csv 파일만 업로드 가능합니다.");
    }
  };

  return (
    <div>
      {/* 드래그 앤 드롭 영역 */}
      <div
        className={`rounded-lg border-2 border-dashed p-8 text-center transition ${
          dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFile(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            inputRef.current?.click();
          }
        }}
      >
        <p className="py-10 text-sm text-gray-600">
          {uploading
            ? "업로드증..."
            : "파일을 여기로 드래그하거나 클릭하여 업로드"}
        </p>
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={(e) => handleFile(e.target.files)}
        />
      </div>
    </div>
  );
}

export default FileUploadArea;
