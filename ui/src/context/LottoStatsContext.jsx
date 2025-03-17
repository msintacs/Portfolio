import React, { createContext, useContext, useMemo, useState } from "react";

const LottoStatsContext = createContext();

export function LottoStatsProvider({ children }) {
  const [selectValue, setSelectValue] = useState(1);

  const value = useMemo(() => {
    return { selectValue, setSelectValue };
  }, [selectValue]);

  return (
    <LottoStatsContext.Provider value={value}>
      {children}
    </LottoStatsContext.Provider>
  );
}

export const useLottoContext = () => useContext(LottoStatsContext);
