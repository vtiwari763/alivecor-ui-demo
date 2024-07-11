import React from "react";
import { LicenseInfo } from "@mui/x-license";
import CustomToolbar from "./CustomToolbar";
import {  MUI_LICENSE } from "./constants/TableConstants";
import { ThemeProvider } from "@mui/material";
import { aliveCorTheme } from "../../utils/theme";
import { DataGridPro } from '@mui/x-data-grid-pro'

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
    columns=[],
    onFiltersChange=undefined, //onchaneg event in filter.
    disableRowSelectionOnClick=true,
    pageSize=10,
  } = props;

  return (
    <ThemeProvider theme={aliveCorTheme}>
      <DataGridPro
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
    </ThemeProvider>
  );
};

