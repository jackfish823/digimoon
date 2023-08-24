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
import AddMissingStudents from "./pages/AddMissingStudents";
import JoinOpenCourse from "./pages/JoinOpenCourse";
import ScanQR from "./pages/ScanQR";
import EnteredClass from "./pages/EnteredClass";

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
    const {isAuth, currentUser} = useAuth()
    console.log(isAuth)
  return (
      <ThemeProvider theme={theme}>
        {isAuth && <Nav/>}
          <CssBaseline/>
          <Routes>
              <Route path='*' element={<Navigate to="/" replace />} />
              <Route path="" Component={Login} />
              <Route path="/register" Component={Register} />
              <Route path="/inclass" Component={EnteredClass} />
              {/*<Route path="/manage/student" Component={AddMissingStudents} />*/}
              {isAuth && <Route path="/home" Component={currentUser?.course ? ScanQR : JoinOpenCourse}/>}
          </Routes>
      </ThemeProvider>
  );
}

export default App;
