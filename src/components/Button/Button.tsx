import React, { ReactHTMLElement, ReactNode } from "react";
import MUIButton from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import "./button.css";
import { ThemeProvider } from "@emotion/react";
import { aliveCorTheme } from "../../utils/theme";


type ButtonProps = {
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  startIcon?: ReactNode
}

export const Button = ({
  label,
  loading,
  ...props
}: ButtonProps) => {

  return (
    <ThemeProvider theme={aliveCorTheme}>
      <MUIButton  {...props} startIcon={loading? <CircularProgress size={20} color="secondary"/>: null}>
        { label}
      </MUIButton>
    </ThemeProvider>
    
  );
};
