import React, { ReactElement } from "react";
import { Paper as MUIPaper, styled, Typography } from "@mui/material";

type PaperType = {
  children?: ReactElement | ReactElement[];
  classes?: any;
  component?: ReactElement;
  elevation?: number;
  square?: boolean;
  sx?: object;
  variant?: "elevation" | "outlined";

  title: string;
  titleColor?: string;
  background?: string;
};

const MuiPaper = styled(MUIPaper)((props: any) => {
  return {
    width: "100%",
    minWidth: "200px",
    borderRadius: "12px",
    backgroundColor: props.background,
    padding: "16px",
    boxSizing: "border-box",
  };
});

export const Paper = (props: PaperType) => {
  const { title, background, titleColor = "#000000", children } = props;
  return (
    <MuiPaper background={background} {...props}>
      <Typography
        component="h4"
        sx={{ marginBottom: "5px", color: titleColor }}
      >
        {title}
      </Typography>
      {children}
    </MuiPaper>
  );
};

export default Paper;
