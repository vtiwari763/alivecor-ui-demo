import React from "react";
import { LicenseInfo } from "@mui/x-license";
import CustomToolbar from "./CustomToolbar";
import {  MUI_LICENSE } from "./constants/TableConstants";
import { DataGridPro, GridColDef, GridActionsCellItem } from '@mui/x-data-grid-pro'


LicenseInfo.setLicenseKey(MUI_LICENSE);
type TableProps = {
  columns: GridColDef[];
  rows: any[];
  onFiltersChange?: (arg: any)=> void;
  checkboxSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  disableMultipleRowSelection?: boolean;
  //disableVirtualization?: boolean;
  pageSize?: number;
  pagination?: boolean;
  pageSizeOptions?: number[];
  onPaginationModelChange?:  (arg: any)=> void;
  autoHeight?: boolean;
  loading?: boolean;
  actionMenu?: any[];
  enableToolbar?: boolean;
  disableColumnSorting?: boolean;
}

export const DataGrid = (props: TableProps) => {
  const {
    columns,
    onFiltersChange=undefined, //onchaneg event in filter
    pageSize=5,
    autoHeight=true,
    actionMenu=[],
    enableToolbar=false,
  } = props;

  if(actionMenu.length){
    const  getMenu = (params: any)=>{
      const menuOptions = actionMenu.map((menu)=>{
        return (
          <GridActionsCellItem
            icon={menu.icon}
            label={menu.label}
            onClick={()=> menu.onClick(params)}
            showInMenu
            sx={{
              color: menu.color
            }}
          />
        )
      });
      return menuOptions;
    }
    
    columns.push({
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params: any) => getMenu(params),
    })
  }
  

  return (
    <DataGridPro
    getEstimatedRowHeight={() => 100}
    slots={{
      toolbar: enableToolbar ? CustomToolbar: null,
    }}
    onFilterModelChange={(newFilterModel: any) => {
      onFiltersChange !== undefined &&
      onFiltersChange(newFilterModel);
    }}
    initialState={{
      pagination: { paginationModel: { pageSize: pageSize} },
    }}
    autoHeight={autoHeight}
    {...props}
  />
  );
};

