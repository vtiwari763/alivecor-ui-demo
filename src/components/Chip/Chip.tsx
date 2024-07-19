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
  type?: "default" | "normal" | "abnormal" | "needAttention" | "severe" | "crisis" | "disabled" | string
  //color?: 'default' | 'primary'| 'secondary'| 'error'| 'info' | 'success' | 'warning';
  onClick?: ()=> void;
  clickable?: boolean;
  onDelete?: ()=> void;
  deleteIcon?: ReactElement;
  icon?: ReactElement;
}

const getChipColor = (type: string)=>{
  let bgColor = 'rgba(255, 255, 255, 1)';
  let borderColor = '1px solid rgba(0, 0, 0, 0.6)';
  let labelColor = 'rgba(0, 0, 0, 0.6)';
  let avatarBgColor = 'rgba(0, 0, 0, 0.6)';

  if(type=='normal'){
    bgColor = 'rgba(6, 127, 111, 0.2)';
    borderColor = '1px solid rgb(6, 127, 111)';
    labelColor = 'rgba(0, 0, 0, 0.8)';
    avatarBgColor = 'rgb(6, 127, 111)';
  }
  else if(type=='abnormal'){
    bgColor = 'rgba(253, 194, 70, 0.2)';
    borderColor = '1px solid rgb(253, 194, 70)';
    labelColor = 'rgba(0, 0, 0, 0.8)';
    avatarBgColor = 'rgb(253, 194, 70)';
  }
  else if(type=='needAttention'){
    bgColor = 'rgba(247, 140, 78, 0.2)';
    borderColor = '1px solid rgb(247, 140, 78)';
    labelColor = 'rgba(0, 0, 0, 0.8)';
    avatarBgColor = 'rgb(247, 140, 78)';
  }
  else if(type=='severe'){
    bgColor = 'rgba(242, 95, 95, 0.2)';
    borderColor = '1px solid rgb(242, 95, 95)';
    labelColor = 'rgba(0, 0, 0, 0.8)';
    avatarBgColor = 'rgb(242, 95, 95)';
  }
  else if(type=='crisis'){
    bgColor = 'rgba(204, 61, 63, 0.2)';
    borderColor = '1px solid rgb(204, 61, 63)';
    labelColor = 'rgba(0, 0, 0, 0.8)';
    avatarBgColor = 'rgb(204, 61, 63)';
  }
  else if(type=='disabled'){
    bgColor = 'rgba(0, 0, 0, 0.1)';
    borderColor = '1px solid rgb(0, 0, 0, 0.2)';
    labelColor = 'rgba(0, 0, 0, 0.8)';
    avatarBgColor = 'rgba(0, 0, 0, 0.2)';
  }

  return {
    bgColor,
    borderColor,
    labelColor,
    avatarBgColor,
  }
};

const MuiChips = styled(MUIChip)((props: any) => { 
  const chipColor = getChipColor(props.type)
  const numbers = props?.avatar?.props?.children || 0;
  const numberLength =  String(numbers).length;
  return {
    backgroundColor: chipColor.bgColor,
    border: chipColor.borderColor,
    borderRadius: '48px',
    width: '100%',
    height: 44,
    display: 'flex',
    justifyContent: 'flex-start',
    '& .MuiChip-label': {
       color: chipColor.labelColor,
       fontWeight: 400
    },
    '& .MuiChip-avatar': {
       color: '#fff',
       backgroundColor: chipColor.avatarBgColor,
       fontWeight: 500,
       maxWidth: '50%',
       width: 'unset',
       minWidth: '35px',
       minHeight: '35px',
       boxSizing: 'border-box',
       borderRadius: numberLength===1 ? '100%' : '48px',
       padding: numberLength==1 ? 'unset' : '0px 12px 0px 12px',
    },
  }
});

export const Chip = ({
  avatar,
  size="medium",
  type="default",
  ...props
}: ButtonProps) => {

  return (
    //@ts-ignore type is throwing error, Todo: need to fix
    <MuiChips type={type} size={size} avatar={avatar && <Avatar>{avatar}</Avatar>} {...props} />
  );
};
