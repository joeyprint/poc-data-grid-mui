import React from "react";
import { DataGrid as MUIDataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Avatar, Chip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const rows = [
  {
    id: "93034ebf-4582-4bcb-99e1-2290ac6d49d8",
    date: "08-12-2021",
    name: "Alice",
    tel: "+66 63 094 2913",
    position: "Project Manager",
    status: "Active",
  },
  {
    id: "4b83ec01-6e4b-4958-b5a1-b69ac3764105",
    date: "20-09-2021",
    name: "Bob",
    tel: "+66 14 370 9470",
    position: "Programmer",
    status: "Expired",
  },
  {
    id: "0f87e414-80fb-41b1-b599-43eee5b096b7",
    date: "31-05-2021",
    name: "Cathy",
    tel: "+66 61 090 6231",
    position: "Freelance",
    status: "Active",
  },
];

const columns = [
  {
    field: "date",
    headerName: "Created",
    width: 150,
  },
  {
    field: "name",
    headerName: "User",
    width: 150,
    renderCell: (item) => (
      <Chip
        avatar={<Avatar>{item.value.charAt(0)}</Avatar>}
        label={item.value}
      />
    ),
  },
  {
    field: "position",
    headerName: "Position",
    width: 150,
    renderCell: (item) => (
      <Typography variant={"body2"} fontWeight={600}>
        {item.value}
      </Typography>
    ),
  },
  { field: "tel", headerName: "Phone Number", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (item) => (
      <Chip
        label={item.value}
        color={item.value === "Active" ? "success" : "error"}
      />
    ),
  },
  {
    field: "actions",
    type: "actions",
    getActions: (item) => [
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={() => {}}
      />,
      <GridActionsCellItem
        icon={<ContentCopyRoundedIcon />}
        label="Duplicate"
        onClick={() => {}}
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={() => {}}
      />,
    ],
  },
];

const NormalDataGrid = () => {
  return <MUIDataGrid autoHeight rows={rows} columns={columns} />;
};

export default NormalDataGrid;
