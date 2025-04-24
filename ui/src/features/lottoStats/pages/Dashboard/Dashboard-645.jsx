import React from "react";
import DashboardHeader from "./DashboardHeader";
import WinningNumbers from "./WinningNumbers";
import useAsync from "../../../../hooks/useAsync";
import DashboardTab from "./DashboardTab";
import { getLottoLastWinNum, getRecentWinNum } from "../../service/Lotto";

function Dashboard645({ lottoKind }) {
  /* 최근 로또 번호 */
  const { loading, data, reFetch } = useAsync(
    getLottoLastWinNum,
    [],
    lottoKind !== 1
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <DashboardHeader reFetch={reFetch} />

      {/* 당첨 번호 */}
      <WinningNumbers loading={loading} lottoData={data?.data?.results} />

      {/* Content Tab */}
      <DashboardTab />
    </div>
  );
}

export default Dashboard645;
