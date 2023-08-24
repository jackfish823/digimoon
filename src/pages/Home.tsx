import LoginForm from "../components/LoginForm";
import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";



const Home = () => {
    const { currentUser } = useAuth();

    return <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <Typography>Hello {currentUser?.username}</Typography>
    </div>
}

export default Home;