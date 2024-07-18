import React, { ReactElement } from "react";
import MUIChip from "@mui/material/Chip";
import { Avatar, styled } from "@mui/material";


type ButtonProps = {
  label?: string;
  alt?: string;
  src?: string;
  classes?: object;
  component?: ReactElement;
  href?: string;
  avatar?: any;
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  type?: "normal" | "abnormal" | "needAttention" | "severe" | "crisis" | "disabled"
  color?: 'default' | 'primary'| 'secondary'| 'error'| 'info' | 'success' | 'warning';
  onClick?: ()=> void;
  clickable?: boolean;
  onDelete?: ()=> void;
  deleteIcon?: ReactElement;
  icon?: ReactElement;
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

const MuiChipDisabled= styled(MUIChip)(() => { 
  return {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    color: '#fff',   
    '& .MuiChip-label': {
       color: 'rgba(0, 0, 0, 0.87)',
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  }
});

export const Chip = ({
  avatar,
  size="medium",
  type,
  ...props
}: ButtonProps) => {

  return (
    <>
     {!type && <MUIChip size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='normal' && <MuiChipNormal size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='abnormal' && <MuiChipAbNormal size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='needAttention' && <MuiChipNeedAttention size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='severe' && <MuiChipSevere size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='crisis' && <MuiChipCrisis size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
      {type==='disabled' && <MuiChipDisabled size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />}
    </>
  );
};
