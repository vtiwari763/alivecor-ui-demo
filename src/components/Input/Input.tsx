import React from "react";
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@emotion/react";
import { aliveCorTheme } from "../../utils/theme";


type InputProps = {
  size?: "small" | "medium",
  variant?: "filled" | "outlined" | "standard";
  label: string;
  helperText?: string;
  color?: "error" | "warning";
  focused?: boolean,
  disabled?: boolean;
  required?: boolean;
  type?: "password" | "number" | "text";
  onChange?:() => void;
  onBlur?: () => void;
}

export const Input = ({
  label,
  size,
  variant = "outlined",
  ...props
}: InputProps) => {

  return (
    <ThemeProvider theme={aliveCorTheme}>
      <TextField size={size} label={label} variant={variant} {...props}/>
    </ThemeProvider>
  );
};
