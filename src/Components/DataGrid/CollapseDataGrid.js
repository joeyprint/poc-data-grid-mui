import * as React from "react";
import {
  DataGridPro,
  useGridSelector,
  useGridApiContext,
  gridDetailPanelExpandedRowsContentCacheSelector,
  GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
} from "@mui/x-data-grid-pro";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Alert, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledDataGridPro = styled(DataGridPro)(({ theme }) => ({
  "& .MuiDataGrid-detailPanel": {
    overflowY: "scroll",
  },
}));

const columns = [
  {
    field: "question",
    flex: 1,
    renderCell: (item) => (
      <Typography
        variant={"body2"}
        fontWeight={600}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
        overflow={"hidden"}
      >
        {item.value}
      </Typography>
    ),
  },
  // { field: "choices", headerName: "Choices", width: 150 },
  { field: "subject", headerName: "Subject", width: 150 },
  { field: "bloom", headerName: "Bloom", width: 150 },
  { field: "level", headerName: "Level", width: 150 },
  {
    ...GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
    type: "actions",
    renderCell: (params) => (
      <CustomDetailPanelToggle id={params.id} value={params.value} />
    ),
  },
];

const rows = [
  {
    id: "bdee74cb-a45d-439b-9b63-435d1fab7a88",
    subject: "English",
    question: "Which one is animal",
    choices: ["ant", "axe", "apple", "alcohol"],
    correctAnswer: 1,
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "63184d56-4eee-4c96-9790-06de9687b649",
    subject: "Computer",
    question: "Which one isn't IT gadgets",
    choices: ["Monitor", "Keyboard", "Glasses", "Speaker"],
    correctAnswer: 3,
    bloom: "Remember",
    level: "Easy",
  },
  {
    id: "4811c2c9-a9a3-476f-ab26-3f7d734fb49a",
    subject: "General",
    question: "Which one isn't Apple's products",
    choices: ["iPhone", "iTag", "AirTag", "Airpod"],
    correctAnswer: 2,
    bloom: "Remember",
    level: "Easy",
  },
  // {
  //   id: "93034ebf-4582-4bcb-99e1-2290ac6d49d8",
  //   subject: "General",
  //   question: "Which one is Meta's products",
  //   choices: ["Metaverse", "Facebook", "Tictok", "Microsoft"],
  //   correctAnswer: 3,
  //   bloom: "Remember",
  //   level: "Medium",
  // },
  {
    id: "0f87e414-80fb-41b1-b599-43eee5b096b7",
    subject: "General",
    question:
      "กราฟต่อไปนี้แสดงความสามารถในการละลายของสาร X และสาร Y ในน้ำ เมื่อนำสาร X และ Y ไปละลายน้ำในภาชนะเดียวกันจนได้สารละลายอิ่มตัว (ของสารทั้ง 2 ชนิด) ที่อุณหภูมิ 60 o C แล้วค่อยๆ ลดอุณหภูมิลงจนเป็น 40 o C พบว่า มีตะกอนตกอยู่ที่ก้นภาชนะ ตะกอนนี้คือสารใด",
    choices: [
      "สาร X อย่างเดียว",
      "สาร Y อย่างเดียว",
      "สาร X ปนกับสาร Y แต่มีสาร X มากกว่า",
      "สาร X ปนกับสาร Y แต่มีสาร Y มากกว่า",
    ],
    imageUrl: "/assets/images/question/question-image.jpeg",
    correctAnswer: 3,
    bloom: "Understand",
    level: "Medium",
  },
  {
    id: "4b83ec01-6e4b-4958-b5a1-b69ac3764105",
    subject: "General",
    question:
      "สาร A ทำ ปฏิกิริยากับแคลเซียมคาร์บอเนต เกิดแก๊ส B แก๊ส B ทำ ปฏิกิริยากับสารละลายแคลเซียมไฮดรอกไซด์ เกิดตะกอนสีขาวขุ่น สาร A และ แก๊ส B ควรเป็นสารใด ตามลำดับ",
    choices: [
      "น้ำส้มสายชู, SO2",
      "น้ำยาล้างห้องน้ำ, SO2",
      "น้ำสบู่, CO2",
      "น้ำมะนาว, CO2",
    ],
    correctAnswer: 4,
    bloom: "Understand",
    level: "Medium",
  },
];

function CustomDetailPanelToggle(props) {
  const { id, value: isExpanded } = props;
  const apiRef = useGridApiContext();

  // To avoid calling ´getDetailPanelContent` all the time, the following selector
  // gives an object with the detail panel content for each row id.
  const contentCache = useGridSelector(
    apiRef,
    gridDetailPanelExpandedRowsContentCacheSelector
  );

  // If the value is not a valid React element, it means that the row has no detail panel.
  const hasDetail = React.isValidElement(contentCache[id]);

  return (
    <IconButton
      size="small"
      tabIndex={-1}
      disabled={!hasDetail}
      aria-label={isExpanded ? "Close" : "Open"}
    >
      <ExpandMoreIcon
        sx={{
          transform: `rotateZ(${isExpanded ? 180 : 0}deg)`,
          transition: (theme) =>
            theme.transitions.create("transform", {
              duration: theme.transitions.duration.shortest,
            }),
        }}
        fontSize="inherit"
      />
    </IconButton>
  );
}

const CollapseDataGrid = () => {
  const [pageSize, setPageSize] = React.useState(5);
  const [detailPanelExpandedRowIds, setDetailPanelExpandedRowIds] =
    React.useState([]);

  const handleDetailPanelExpandedRowIdsChange = React.useCallback((newIds) => {
    setDetailPanelExpandedRowIds(newIds);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Alert severity="info" style={{ marginBottom: 8 }}>
        <code>
          detailPanelExpandedRowIds: {JSON.stringify(detailPanelExpandedRowIds)}
        </code>
      </Alert>
      <div style={{ height: 400, width: "100%" }}>
        <StyledDataGridPro
          rows={rows}
          columns={columns}
          rowThreshold={0}
          getDetailPanelContent={({ row }) => (
            <Box sx={{ py: 2, px: 4 }}>
              {row.imageUrl && (
                <Box
                  component={"img"}
                  src={row.imageUrl}
                  alt={"question-image"}
                />
              )}
              <Typography sx={{ p: 2 }}>
                <Typography
                  component={"span"}
                  fontWeight={600}
                  color={"grey.500"}
                >
                  Question:
                </Typography>
                {` ${row.question}`}
              </Typography>
              {row.choices.map((choice, index) => (
                <Typography
                  variant={"body1"}
                  sx={{
                    p: 2,
                    bgcolor:
                      row.correctAnswer === index + 1
                        ? "success.light"
                        : "unset",
                  }}
                >
                  {choice}
                </Typography>
              ))}
            </Box>
          )}
          getDetailPanelHeight={() => 300}
          detailPanelExpandedRowIds={detailPanelExpandedRowIds}
          onDetailPanelExpandedRowIdsChange={
            handleDetailPanelExpandedRowIdsChange
          }
          checkboxSelection
          autoHeight
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </div>
    </div>
  );
};

export default CollapseDataGrid;
