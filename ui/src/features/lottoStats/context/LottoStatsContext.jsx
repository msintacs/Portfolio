import React, { createContext, useContext, useMemo, useState } from "react";

/**
 * Lotto Type에 의한 동작 변화를 주기 위해 해당 Value 값을
 * 여러 컴포넌트에서 사용가능하도록 Context 등록
 * @return Lotto Type Value (로또645 or 연금복권720+)
 */
const LottoContext = createContext();

export function LottoProvider({ children }) {
  const [selectValue, setSelectValue] = useState(1);

  const value = useMemo(() => {
    return { selectValue, setSelectValue };
  }, [selectValue]);

  return (
    <LottoContext.Provider value={value}>{children}</LottoContext.Provider>
  );
}

export const useLottoContext = () => useContext(LottoContext);
