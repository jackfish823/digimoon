import {useNavigate} from "react-router-dom";
import {Button, TextField, Typography} from "@mui/material";

const Register = () => {
    const navigate = useNavigate()
    return (<div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography style={{fontSize: 40, marginBottom: 20, marginTop: 10}}>Digimoon</Typography>
        <TextField sx={{marginBottom: 2}} label="username" variant="outlined"/>
        <TextField sx={{marginBottom: 2}} label="email" variant="outlined"/>
        <TextField sx={{marginBottom: 2}} label="password" variant="outlined"/>
        <TextField sx={{marginBottom: 2}} label="password" variant="outlined"/>
        <Button sx={{marginTop: 5}} onClick={() => navigate('/login')} variant="contained">login</Button>
    </div>)
}

export default Register;
