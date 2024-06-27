import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Box } from "@mui/material";
import React from "react";
import "./styles/App.css";
import theme from "./theme";
import CustomCircularProgress from "./components/atoms/Progress";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box style={{ padding: '20px', backgroundColor: '#000' }}>
        <CustomCircularProgress value={0} size={80} strokeWidth={5} />
      </Box>
    </ThemeProvider>
  );
}
