import * as React from "react";
import MUIButton from "@mui/material/Button";
import "./button.css";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  label: string;
  disabled?: boolean;
  onClick?: any;
}

export const Button = ({
  label,
  variant = "contained",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <MUIButton variant={variant} size={size} {...props}>
      {label}
    </MUIButton>
  );
};
