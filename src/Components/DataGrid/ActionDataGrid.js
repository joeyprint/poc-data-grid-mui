import React, { useState } from "react";
import { DataGrid as MUIDataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Modal, Typography } from "@mui/material";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const rows = [
  {
    id: "93034ebf-4582-4bcb-99e1-2290ac6d49d8",
    subject: "Math",
    question: "Which one is animal",
    choices: ["ant", "axe", "apple", "alcohol"],
    answer: "ant",
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "4b83ec01-6e4b-4958-b5a1-b69ac3764105",
    subject: "Math",
    question: "1 + 2 = ?",
    choices: ["1", "2", "3", "4"],
    answer: "3",
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "0f87e414-80fb-41b1-b599-43eee5b096b7",
    subject: "Math",
    question: "1 + 3 = ?",
    choices: ["1", "2", "3", "4"],
    answer: "4",
    bloom: "Remember",
    level: "Easy",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ActionDataGrid = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "question",
      headerName: "Question",
      width: 300,
      renderCell: (item) => (
        <Typography variant={"body2"} fontWeight={600}>
          {item.value}
        </Typography>
      ),
    },
    { field: "subject", headerName: "Subject", width: 150 },
    { field: "bloom", headerName: "Bloom", width: 150 },
    { field: "level", headerName: "Level", width: 150 },
    {
      field: "actions",
      type: "actions",
      getActions: (item) => [
        <GridActionsCellItem
          icon={<RemoveRedEyeIcon />}
          label="See More"
          onClick={() => {
            setItem(item);
            handleOpen();
          }}
        />,
      ],
    },
  ];

  return (
    <>
      <MUIDataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="caption" color={"text.secondary"}>
            Question:
          </Typography>
          <Typography id="modal-modal-title" variant="h6">
            {item?.row?.question}
          </Typography>
          <Box mt={2} />
          <Typography variant="caption" color={"text.secondary"}>
            Choices:
          </Typography>
          {item?.row?.choices.map((choice, index) => (
            <Typography
              id="modal-modal-title"
              variant="body1"
              color={
                choice === item?.row?.answer ? "success.main" : "text.primary"
              }
            >
              {`${index + 1}. ${choice}`}
            </Typography>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default ActionDataGrid;
