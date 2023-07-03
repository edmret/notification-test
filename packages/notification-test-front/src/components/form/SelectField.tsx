import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { LookupType } from "notification-core/src/types/lookup.types";
import { ReactNode } from "react";

interface SelectFieldProps extends SelectProps {
  options?: LookupType[];
  isLoading?: boolean;
}
const SelectField = (props: SelectFieldProps) => {
  const { setFieldValue, values } = useFormikContext();
  const [{ value }, {error}] = useField({ name: props.name ?? '' });

  const handleChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
    const { value } = event.target;
    setFieldValue(props.name ?? '', value);
  };
  
  return (
    <FormControl fullWidth sx={(theme) => ({'& .MuiOutlinedInput-notchedOutline': {
        borderColor: !!error ? theme.palette.error.main: 'rgba(0, 0, 0, 0.23)'
    }})}>
      <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${props.id}-label`}
        id={props.id}
        value={value}
        label={props.label}
        onChange={handleChange}
      >
        {props.options?.map((option) => (
          <MenuItem key={`select-${name}-${option.value}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {!!error && <FormHelperText sx={(theme) => ({ color: theme.palette.error.main })}>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
