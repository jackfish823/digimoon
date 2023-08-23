import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <Button  sx={{position: 'absolute', left:0, top:0}} onClick={() => navigate('/login')} variant="contained">logout</Button>
        <Typography>Hello Noam</Typography>
    </div>
}

export default Home;