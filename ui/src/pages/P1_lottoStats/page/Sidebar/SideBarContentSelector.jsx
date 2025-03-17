import React from "react";
import CustomSelect from "../../share/CustomSelect";
import Lotto645Img from "../../../../assets/LottoStats/645-main.png";
import Lotto720Img from "../../../../assets/LottoStats/720-main.png";
import { useLottoContext } from "../../context/LottoStatsContext";

/**
 * @returns 사이드바 내부 Lotto Type Selector
 */
function SidebarContentSelector() {
  const { selectValue, setSelectValue } = useLottoContext();

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const items = [
    { value: 1, label: "로또 6/45" },
    { value: 2, label: "연금복권 720+" },
  ];

  return (
    <div className="px-5 pb-2">
      <div className="h-[100px] w-[175px]">
        {selectValue === 1 ? (
          <img
            src={Lotto645Img}
            alt="Lotto-645"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <img
            src={Lotto720Img}
            alt="Lotto-720"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>
      <CustomSelect
        selectId="lotto-type-select"
        selectValue={selectValue}
        onChange={handleChange}
        items={items}
      />
    </div>
  );
}

export default SidebarContentSelector;
