import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
  errors?: string;
}

interface IRegister extends FieldValues, IFormValues {}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IRegister>;
  errors: undefined | string;
}

export interface IUserForm {
  email: string;
  password: string;
  errors?: string;
}
