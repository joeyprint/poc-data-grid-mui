import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { LicenseInfo } from "@mui/x-data-grid-pro";

import {
  ActionDataGrid,
  CollapseDataGrid,
  GroupingDataGrid,
  NormalDataGrid,
  TreeDataGrid,
} from "./Components/DataGrid";
import theme from "./Components/Theme";

LicenseInfo.setLicenseKey(
  "x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e"
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Normal Data Grid */}
      <Typography variant="h6">Normal Data Grid</Typography>
      <NormalDataGrid />

      <Box mt={3} />

      {/* Action Data Grid */}
      <Typography variant="h6">Action Data Grid</Typography>
      <ActionDataGrid />

      <Box mt={3} />

      {/* Grouping Data Grid */}
      <Typography variant="h6">Expand Data Grid</Typography>
      <GroupingDataGrid />

      <Box mt={3} />

      {/* Tree Data Grid */}
      <Typography variant="h6">Tree Data Grid</Typography>
      <TreeDataGrid />

      <Box mt={3} />

      {/* Collapse Data Grid */}
      <Typography variant="h6">Collapse Data Grid</Typography>
      <CollapseDataGrid />
    </ThemeProvider>
  );
}

export default App;
