import {Button, TextField, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()
    return (<div style={{display: "flex", width: '80%', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography style={{fontSize: 40, marginBottom: 20, marginTop: 30}}>Digimoon</Typography>
        <TextField fullWidth sx={{marginBottom: 2}} label="username" variant="outlined"/>
        <TextField fullWidth label="password" variant="outlined"/>
        <Button  sx={{marginTop: 5}} onClick={() => navigate('/home')} variant="contained">login</Button>
        <Button sx={{marginTop: 2}} onClick={() => navigate('/register')} variant="text">register</Button>
    </div>)
}

export default LoginForm;