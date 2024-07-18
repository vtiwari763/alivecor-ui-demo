import React, { ReactElement } from "react";
import MUIButton from "@mui/material/Button";
import "./button.css";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  label: string;
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children?: ReactElement;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error'| 'info' | 'warning';
  classes?: string;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {

  return (
    <MUIButton  {...props}>
    { label}
  </MUIButton>
    
  );
};
