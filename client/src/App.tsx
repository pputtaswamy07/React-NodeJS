import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from "./components/Menu/MenuList";
import HomePage from "./components/Home/HomePage";
import ReservationPage from "./components/Reservation/ReservationPage";
import { MenuProvider } from "./contexts/MenuContext";
import Navbar from "./components/lay/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5f2d06",
    },
    secondary: {
      main: "#d0b8a6",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <MenuProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuList />} />
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MenuProvider>
  );
};

export default App;
