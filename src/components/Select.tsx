import { MenuItem } from "@mui/material";
import { StyledSelect } from "../styles/Select.style";
import { SelectChangeEvent } from "@mui/material/Select";

type SelectType = {
  options: SelectOptionType[];
  value: string;
  handleChange: (event: SelectChangeEvent<string | unknown>) => void;
};

type SelectOptionType = {
  key: string;
  label: string;
};

function CustomSelect({ options, value, handleChange }: SelectType) {
  return (
    <StyledSelect fullWidth value={value} onChange={handleChange} displayEmpty>
      {options.map(({ key, label }: SelectOptionType) => (
        <MenuItem key={key} value={key}>
          {label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
}

export default CustomSelect;
