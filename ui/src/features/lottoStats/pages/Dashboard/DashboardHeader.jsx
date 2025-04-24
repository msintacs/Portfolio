import React, { useState } from "react";
import UploadModal from "./ExcelUpload/UploadModal";

function DashboardHeader({ reFetch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="mx-auto max-w-6xl py-6 3xl:max-w-8xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl">DASHBOARD</h1>
              <p className="mt-1 text-sm opacity-80">통계 및 패턴 분석</p>
            </div>
            <div className="items-center space-x-3">
              <button
                type="button"
                className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-blue-700"
                onClick={openModal}
              >
                엑셀 대량 업로드
              </button>
              <button
                type="button"
                className="rounded-full border border-blue-600 px-4 py-2 text-sm text-blue-600 backdrop-blur-sm transition hover:bg-blue-50"
                onClick={reFetch}
              >
                데이터 새로고침
              </button>
            </div>
          </div>
        </div>
      </header>

      <UploadModal
        key={isModalOpen ? "open" : "closed"}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default DashboardHeader;
