import { darken, lighten, styled } from '@mui/material'
import { DataGridPremium } from '@mui/x-data-grid-premium'

const DataGridPremiumWithKCStyles = styled(DataGridPremium, {
  shouldForwardProp: (prop) => prop !== 'maxHeight'
})(({ theme  }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light'
      ? 'rgba(0,0,0,.85)'
      : 'rgba(255,255,255,0.85)',
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
 // maxHeight: "100%",
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },

  '& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle' : {
    fontWeight: 600
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: 'none',
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light'
        ? 'rgba(0,0,0,.85)'
        : 'rgba(255,255,255,0.65)',
    '&.data-grid__actions': {
      justifyContent: 'flex-end',
      paddingRight: 0,
      gap: '8px',
    '& button:hover': {
      color: theme.palette.primary.main
    },
    },
    '&.data-grid-cell-encrypted': {
      fontSize: '1.2em'
    }
  },
  '& .MuiDataGrid-row': {
    width: '100%',
    '&:hover': {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? lighten(theme.palette.primary.main, 0.9)
          : darken(theme.palette.primary.main, 0.9)
      }`,
      '& .MuiDataGrid-cell': {
        '&:last-child': {
          visibility: 'visible',
        },
      },
    },
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
}))

export default DataGridPremiumWithKCStyles