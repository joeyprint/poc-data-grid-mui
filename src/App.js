import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { LicenseInfo } from "@mui/x-data-grid-pro";

import {
  NormalDataGrid,
  ExpandDataGrid,
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

      {/* Data Grid */}
      <Typography variant="h6">Expand Data Grid</Typography>
      <ExpandDataGrid />

      <Box mt={3} />

      {/* Data Grid */}
      <Typography variant="h6">Tree Data Grid</Typography>
      <TreeDataGrid />
    </ThemeProvider>
  );
}

export default App;
