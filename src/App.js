import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import DataGrid from "./Components/DataGrid";
import theme from "./Components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataGrid />
    </ThemeProvider>
  );
}

export default App;
