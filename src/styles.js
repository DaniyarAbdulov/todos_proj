import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#212121",
    },
    success: {
      main: "#2e7d32",
    },
    background: {
      default: "#e0e0e0",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  shape: {
    borderRadius: 30,
  },
  spacing: 8,
});

export default theme;
