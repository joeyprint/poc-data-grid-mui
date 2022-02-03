import React from "react";
import {
  DataGridPro as MUIDataGridPro,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const INITIAL_GROUPING_COLUMN_MODEL = ["question"];

const rows = [
  {
    id: "bdee74cb-a45d-439b-9b63-435d1fab7a88",
    subject: "Math",
    question: "Which one is animal",
    choices: "ant",
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "63184d56-4eee-4c96-9790-06de9687b649",
    subject: "Math",
    question: "Which one is animal",
    choices: "apple",
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "4811c2c9-a9a3-476f-ab26-3f7d734fb49a",
    subject: "Math",
    question: "Which one is animal",
    choices: "axe",
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "93034ebf-4582-4bcb-99e1-2290ac6d49d8",
    subject: "Math",
    question: "Which one is animal",
    choices: "alcohol",
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "4b83ec01-6e4b-4958-b5a1-b69ac3764105",
    subject: "Math",
    question: "1 + 2 = ?",
    choices: ["1", "2", "3", "4"],
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "0f87e414-80fb-41b1-b599-43eee5b096b7",
    subject: "Math",
    question: "1 + 3 = ?",
    choices: ["1", "2", "3", "4"],
    bloom: "Remember",
    level: "Easy",
  },
];

const columns = [
  {
    field: "question",
    groupable: true,
    hide: true,
    width: 300,
    renderCell: (item) => (
      <Typography variant={"body2"} fontWeight={600}>
        {item.value}
      </Typography>
    ),
  },
  { field: "choices", headerName: "Choices", width: 150 },
  { field: "subject", headerName: "Subject", width: 150 },
  { field: "bloom", headerName: "Bloom", width: 150 },
  { field: "level", headerName: "Level", width: 150 },
  // {
  //   field: "actions",
  //   type: "actions",
  //   getActions: (item) => [
  //     <GridActionsCellItem
  //       icon={<ExpandMoreIcon />}
  //       label="Edit"
  //       onClick={() => {}}
  //     />,
  //   ],
  // },
];

const ExpandDataGrid = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <MUIDataGridPro
        rows={rows}
        columns={columns}
        rowGroupingColumnMode="single"
        initialState={{
          rowGrouping: {
            model: INITIAL_GROUPING_COLUMN_MODEL,
          },
        }}
        experimentalFeatures={{
          rowGrouping: true,
        }}
      />
    </div>
  );
};

export default ExpandDataGrid;
