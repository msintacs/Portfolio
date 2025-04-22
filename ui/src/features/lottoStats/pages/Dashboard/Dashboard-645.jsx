import React from "react";
import DashboardHeader from "./DashboardHeader";
import WinningNumbers from "./WinningNumbers";
import useAsync from "../../../../hooks/useAsync";
import DashboardTab from "./DashboardTab";
import { getLottoLastWinNum, getRecentWinNum } from "../../service/Lotto";

function Dashboard645({ lottoKind }) {
  /* 최근 로또 번호 */
  const {
    loading: lottoLoading,
    data: lottoData,
    reFetch: lottoReFetch,
  } = useAsync(getLottoLastWinNum, [], lottoKind !== 1);

  /* 최근 로또 번호를 제외한 근 3주치 데이터 */
  const { loading: recentLoading, data: recentData } = useAsync(
    getRecentWinNum,
    [],
    lottoKind !== 1
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <DashboardHeader lottoReFetch={lottoReFetch} />

      {/* 당첨 번호 */}
      {!lottoLoading && (
        <WinningNumbers
          results={lottoData?.data?.results}
          lottoKind={lottoKind}
        />
      )}

      {/* Content Tab */}
      {!recentLoading && (
        <DashboardTab recentData={recentData?.data?.results} />
      )}
    </div>
  );
}

export default Dashboard645;
