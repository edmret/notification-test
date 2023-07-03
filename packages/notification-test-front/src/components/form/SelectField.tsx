import {
  FormControl,
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
  const { setFieldValue } = useFormikContext();
  const [{ value }] = useField({ name: props.name ?? '' });

  const handleChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
    const { value } = event.target;
    setFieldValue(props.name ?? '', value);
  };

  return (
    <FormControl fullWidth>
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
    </FormControl>
  );
};

export default SelectField;
