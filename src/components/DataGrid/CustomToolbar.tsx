import React from 'react';
import Divider from '@mui/material/Divider';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function CustomToolbar() {
  return (
    <>
    <GridToolbarContainer>
      <GridToolbarColumnsButton 
        slotProps={{
          button: { variant: 'outlined', size: "medium", startIcon: null, endIcon: <ViewColumnOutlinedIcon /> },
        }}
      />
      <GridToolbarFilterButton
        slotProps={{
          button: { variant: 'outlined', size: "medium",  startIcon: null, endIcon: <FilterListOutlinedIcon /> },
        }}
      />
      <GridToolbarDensitySelector
        slotProps={{ 
          tooltip: { title: 'Change density'}, 
          button:{variant:'outlined', size: "medium",  startIcon: null, endIcon: <FormatAlignJustifyOutlinedIcon />} 
        }}
      />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { variant: 'outlined', size: "medium",  startIcon: null, endIcon: <FileDownloadOutlinedIcon /> },
        }}
      />
    </GridToolbarContainer>
    <br/>
    <Divider />
    </>
  );
}

export default CustomToolbar;