import React from "react";
import DashboardHeader from "./DashboardHeader";
import WinningNumbers from "./WinningNumbers";
import useAsync from "../../../../hooks/useAsync";
import { getLottoLastWinNum } from "../../service/Lotto";

function Dashboard645({ lottoKind }) {
  const {
    loading,
    error,
    data: lottoData,
    reFetch,
  } = useAsync(getLottoLastWinNum, [], lottoKind !== 1);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <DashboardHeader reFetch={reFetch} />

      {/* 당첨 번호 */}
      <WinningNumbers data={lottoData} lottoKind={lottoKind} />
    </div>
  );
}

export default Dashboard645;
