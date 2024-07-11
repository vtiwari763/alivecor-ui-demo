import React from "react";
import { LicenseInfo } from "@mui/x-license";
import CustomToolbar from "./CustomToolbar";
import {  MUI_LICENSE } from "./constants/TableConstants";
import { Paper, ThemeProvider } from "@mui/material";
import { DataGridPremiumWithKCStyles } from "./theme";
import { aliveCorTheme } from "../../utils/theme";

LicenseInfo.setLicenseKey(MUI_LICENSE);
type TableProps = {
  onFiltersChange?: (arg: any)=> void;
  checkboxSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  pagination?: boolean;
  pageSizeOption?: number[];
  children?: any;
  columns: any[];
  rows: any[];
  pageSize?: number;
}

export const DataGrid = (props: TableProps) => {
  const {
    onFiltersChange=undefined, //onchaneg event in filter.
    disableRowSelectionOnClick=true,
    pageSize=10,
    children,
  } = props;

  return (
    <ThemeProvider theme={aliveCorTheme}>
    <Paper
      sx={{
        height: "100%",
        padding: {
          sm: 3,
          xs: 1,
        },
      }}
    >
      <DataGridPremiumWithKCStyles
        getEstimatedRowHeight={() => 100}
        slots={{
          toolbar: CustomToolbar,
        }}
        onFilterModelChange={(newFilterModel: any) => {
          onFiltersChange !== undefined &&
          onFiltersChange(newFilterModel);
        }}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        initialState={{
          pagination: { paginationModel: { pageSize: pageSize} },
        }}
        pageSizeOptions={[5, 10, 25]}
        {...props}
      />
      {children}
    </Paper>
    </ThemeProvider>
  );
};

