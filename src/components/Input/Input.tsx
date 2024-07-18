import React, { ReactElement } from "react";
import TextField from '@mui/material/TextField';


type InputProps = {
  size?: "small" | "medium",
  variant?: "filled" | "outlined" | "standard";
  type?: "password" | "number" | "text" | string;
  autoComplete?: string;
  autoFocus?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: any;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: object;
  fullWidth?: boolean;
  helperText?: ReactElement;
  id?: string;
  InputLabelProps?: object;
  inputProps?: object;
  InputProps?: object;
  inputRef?: any;
  label?: string;
  margin?: 'dense' | 'none'| 'normal';
  maxRows?: number | string;
  minRows?: number | string;
  multilin?: boolean;
  name?: string;
  onChange?:() => void;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  select?: boolean;
  SelectProps?: object;
  focused?: boolean,
  onBlur?: () => void;
  value?: any;
  sx?: any
}

export const Input = ({
  ...props
}: InputProps) => {

  return (
    <TextField {...props}/>
  );
};
