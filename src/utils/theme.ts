import { createTheme, responsiveFontSizes } from "@mui/material"

export const aliveCorTheme = responsiveFontSizes(createTheme({
    palette: {
      primary: {
        main: '#6387C5',
      },
      secondary:{
        main: '#F5F5F5',
      }
    }
}));