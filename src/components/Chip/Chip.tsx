import React from "react";
import MUIChip from "@mui/material/Chip";
import { ThemeProvider } from "@emotion/react";
import { aliveCorTheme } from "../../utils/theme";
import { Avatar, createTheme, styled } from "@mui/material";


type ButtonProps = {
  label: string;
  avatar?: any;
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  type?: "normal" | "abnormal" | "needAttention" | "severe" | "crisis" | "disabled"
}

const MuiChipNormal = styled(MUIChip)(() => { 
  return {
    backgroundColor: 'rgba(6, 127, 111, 0.2)',
    border: '1px solid rgb(6, 127, 111)',
    color: 'white',   
    '& .MuiChip-label': {
       color: 'rgba(0, 0, 0, 0.87)',
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: 'rgb(6, 127, 111)',
    },
  }
});

const MuiChipAbNormal = styled(MUIChip)(() => { 
  return {
    backgroundColor: 'rgba(253, 194, 70, 0.2)',
    border: '1px solid rgb(253, 194, 70)',
    color: '#fff',   
    '& .MuiChip-label': {
       color: 'rgba(0, 0, 0, 0.87)',
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: 'rgb(253, 194, 70)',
    },
  }
});

const MuiChipNeedAttention = styled(MUIChip)(() => { 
  return {
    backgroundColor: 'rgba(247, 140, 78, 0.2)',
    border: '1px solid rgb(247, 140, 78)',
    color: '#fff',   
    '& .MuiChip-label': {
       color: 'rgba(0, 0, 0, 0.87)',
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: 'rgb(247, 140, 78)',
    },
  }
});

const MuiChipSevere = styled(MUIChip)(() => { 
  return {
    backgroundColor: 'rgba(242, 95, 95, 0.2)',
    border: '1px solid rgb(242, 95, 95)',
    color: '#fff',   
    '& .MuiChip-label': {
       color: 'rgba(0, 0, 0, 0.87)',
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: 'rgb(242, 95, 95)',
    },
  }
});

const MuiChipCrisis = styled(MUIChip)(() => { 
  return {
    backgroundColor: 'rgba(204, 61, 63, 0.2)',
    border: '1px solid rgb(204, 61, 63, 1)',
    color: '#fff',   
    '& .MuiChip-label': {
       color: 'rgba(0, 0, 0, 0.87)',
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: 'rgb(204, 61, 63)',
    },
  }
});



export const Chip = ({
  avatar,
  size="medium",
  type="normal",
  ...props
}: ButtonProps) => {

  return (
    <ThemeProvider theme={aliveCorTheme}>
      {type==='normal' && <MuiChipNormal size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='abnormal' && <MuiChipAbNormal size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='needAttention' && <MuiChipNeedAttention size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='severe' && <MuiChipSevere size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='crisis' && <MuiChipCrisis size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
    </ThemeProvider>
  );
};
