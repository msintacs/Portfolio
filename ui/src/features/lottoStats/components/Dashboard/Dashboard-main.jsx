import React from "react";
import { useLottoContext } from "../../context/LottoStatsContext";
import Dashboard645 from "./Dashboard-645";
import Dashboard720 from "./Dashboard-720";

function DashboardMain() {
  const { selectValue } = useLottoContext();
  return selectValue === 1 ? (
    <Dashboard645 lottoKind={selectValue} />
  ) : (
    <Dashboard720 lottoKind={selectValue} />
  );
}

export default DashboardMain;
