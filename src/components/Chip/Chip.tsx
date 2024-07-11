import React from "react";
import MUIChip from "@mui/material/Chip";
import { ThemeProvider } from "@emotion/react";
import { aliveCorTheme } from "../../utils/theme";
import { Avatar } from "@mui/material";


type ButtonProps = {
  label: string;
  avatar?: any;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  variant?: "filled" | "outlined";
}

export const Chip = ({
  avatar,
  ...props
}: ButtonProps) => {

  return (
    <ThemeProvider theme={aliveCorTheme}>
      <MUIChip avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} 
        sx={{
            ".MuiChip-root":{
              bgcolor: "#067F6F",
              borderColor: "#067F6F",
            }
        }}
      />
    </ThemeProvider>
    
  );
};
