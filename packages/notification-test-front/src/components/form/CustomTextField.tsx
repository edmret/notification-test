import TextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import { Field, useField } from "formik";

export default function CustomTextField<Variant extends TextFieldVariants>(
  props: {
    variant?: Variant;
  } & Omit<TextFieldProps, "variant">
) {
  const [, { error }] = useField({ name: props.name ?? "" });
  return <Field as={TextField} {...props} error={!!error} helperText={error} />;
}
