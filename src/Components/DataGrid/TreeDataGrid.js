import React from "react";
import { DataGridPro as MUIDataGridPro } from "@mui/x-data-grid-pro";

const rows = [
  {
    id: "a235feff-d921-44be-b740-c7b2d5cc8d8f",
    subject: "Math",
    question: ["Which one is animal"],
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "bdee74cb-a45d-439b-9b63-435d1fab7a88",
    question: ["Which one is animal", "ant"],
  },
  {
    id: "63184d56-4eee-4c96-9790-06de9687b649",
    question: ["Which one is animal", "apple"],
  },
  {
    id: "4811c2c9-a9a3-476f-ab26-3f7d734fb49a",
    question: ["Which one is animal", "axe"],
  },
  {
    id: "93034ebf-4582-4bcb-99e1-2290ac6d49d8",
    question: ["Which one is animal", "alcohol"],
  },
  {
    id: "4b83ec01-6e4b-4958-b5a1-b69ac3764105",
    subject: "Math",
    question: ["1 + 2 = ?"],
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "0f87e414-80fb-41b1-b599-43eee5b096b7",
    subject: "Math",
    question: ["1 + 3 = ?"],
    bloom: "Remember",
    level: "Easy",
  },
];

const columns = [
  { field: "subject", headerName: "Subject", width: 150 },
  { field: "bloom", headerName: "Bloom", width: 150 },
  { field: "level", headerName: "Level", width: 150 },
];

const getTreeDataPath = (row) => row.question;
const TreeDataGrid = () => {
  return (
    <MUIDataGridPro
      autoHeight
      treeData
      rows={rows}
      columns={columns}
      getTreeDataPath={getTreeDataPath}
    />
  );
};

export default TreeDataGrid;
