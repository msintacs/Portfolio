import React, { useState } from "react";
import SelectBox from "../../../components/SelectBox";

function SidebarContentSeletor() {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const selectValueOptions = [
    { value: 1, label: "로또 6/45" },
    { value: 2, label: "연금복권 720+" },
  ];

  return (
    <div className="px-5 pb-5">
      <div>SELECTOR IMG</div>
      <SelectBox
        label="Type"
        options={selectValueOptions}
        value={selectValue}
        onChange={handleChange}
        height={30}
        fontSize={15}
      />
    </div>
  );
}

export default SidebarContentSeletor;
