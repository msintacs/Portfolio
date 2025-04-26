import React from "react";
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

function NoData() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-6 text-center">
      <Construction size={64} className="mb-4 animate-bounce text-yellow-500" />
      <h1 className="mb-2 text-3xl font-bold">현재 개발 진행 중입니다 🛠️</h1>
      <p className="text-gray-600">빠른 시일 내에 멋진 페이지로 찾아뵐게요!</p>

      <Link
        to="/lotto"
        className="mt-4 rounded bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NoData;
