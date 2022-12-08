import TextField from "@mui/material/TextField";
import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
  name?: string;
  errors?: string;
}

interface IRegister extends FieldValues, IFormValues {}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IRegister>;
  errors: FieldError | undefined;
}

const Input = ({ type, placeholder, errors, label, register }: IInputProps) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder={placeholder}
      type={type}
      {...register(label)}
    />
  );
};

export default Input;
