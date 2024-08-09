import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  minWidth = "100%",
  labelId = "custom-select-label",
  selectId = "custom-select",
  fontSize = 16,
  height = 56,
}) {
  return (
    <FormControl sx={{ minWidth }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={value}
        onChange={onChange}
        autoWidth
        label={label}
        sx={{
          fontSize,
          height,
          ".MuiOutlinedInput-input": {
            padding: `${height / 4}px 14px`,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{ fontSize }}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
