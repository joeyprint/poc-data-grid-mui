import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";

import { NormalDataGrid } from "./Components/DataGrid";
import theme from "./Components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Normal Data Grid */}
      <Typography variant="h6">Normal Data Grid</Typography>
      <NormalDataGrid />

      <Box mt={3} />
    </ThemeProvider>
  );
}

export default App;
