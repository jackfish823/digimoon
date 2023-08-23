import React from 'react';
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import LoginForm from "./components/LoginForm";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from './components/Nav';
import { useAuth } from './hooks/useAuthContext';

const theme = createTheme({
    palette: {
        background: {default: '#F5DFBB'},
        primary: {
            main: '#F2542D',
        },
        text: {
            primary: "#0E9594"
        }
    }
})


function App() {
    const {isAuth} = useAuth()
    console.log(isAuth)
  return (
      <ThemeProvider theme={theme}>
        {isAuth && <Nav/>}
          <CssBaseline/>
          <Routes>
              <Route path='*' element={<Navigate to="/" replace />} />
              <Route path="" Component={Login} />
              <Route path="/home" Component={Home} />
              <Route path="/register" Component={Register} />
          </Routes>
      </ThemeProvider>
  );
}

export default App;
