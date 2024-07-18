import React from 'react';
import { ThemeProvider } from "@emotion/react";
import { aliveCorTheme } from "./aliveCorTheme";

export const Theme = (props: any)=>{
    return (
        <ThemeProvider theme={aliveCorTheme}>
            {props.children}
        </ThemeProvider>
    )
}