import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
/**
 * @param { String } selectId : Select 의 ID
 * @param { int } selectValue : 현재 Select의 value 값
 * @param { Function } onChange : Select Handle 변경 시 동작 함수
 * @param { Object } items : Select 내부 MenuItems 객체
 * @returns Custom Select 컴포넌트
 */
function CustomSelect({ selectId, selectValue, onChange, items }) {
  return (
    <FormControl
      size="small"
      sx={{ marginTop: 1, marginBottom: 1, width: "100%" }}
    >
      <Select
        id={selectId}
        value={selectValue}
        onChange={onChange}
        defaultValue={1}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
