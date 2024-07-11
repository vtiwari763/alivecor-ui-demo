import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Table } from "./DataGrid";
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';

const meta = {
  title: "DataGrid",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
   
  },
  args: { },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (value: any, row: any) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'isChild',
    headerName: 'Child/Adult',
    sortable: false,
    width: 160,
    valueGetter: (value: any, row: any) => {
      return row?.age >= 18 ? 'Adult' : 'Child'
    }
  },
  {

    field: 'actions',
    type: 'actions',
    width: 80,
    getActions: (params: any) => [
      <GridActionsCellItem
       icon={<DeleteIcon htmlColor='#CC3D3F' />}
        label="Delete User"
        onClick={(...args)=> console.log(args, params)}
        showInMenu
        sx={{
          color:'#CC3D3F'
        }}
      />,
    ],
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 2 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export const DataGridDefault: Story = {
  args: {
    columns: columns,
    rows: rows,
    pageSize:5,
    pagination: true,
    pageSizeOption: [5, 10],
    checkboxSelection: true,
  },
};
