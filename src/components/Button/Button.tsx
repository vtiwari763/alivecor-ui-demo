import React from "react";
import MUIButton from "@mui/material/Button";
import "./button.css";
import { ThemeProvider } from "@emotion/react";
import { aliveCorTheme } from "../../utils/theme";
import { CircularProgress } from "@mui/material";


type ButtonProps = {
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

export const Button = ({
  label,
  variant = "contained",
  size = "medium",
  loading=false,
  ...props
}: ButtonProps) => {

  return (
    <ThemeProvider theme={aliveCorTheme}>
      <MUIButton  variant={variant} size={size} {...props}>
        { label}
      </MUIButton>
    </ThemeProvider>
    
  );
};
