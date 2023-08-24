import LoginForm from "../components/LoginForm";
import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";
import IconAvatars from "../components/IconAvatars"
import Table from "../components/Table"
import Grid from '@mui/material/Grid';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate()


    return (

        // <Grid container spacing={5} >
        //     <Grid xs display="flex" justifyContent="center" alignItems="center">
        //         <IconAvatars />
        //         <Typography >Hello {currentUser?.username} !</Typography>

        //     </Grid>
        //     <Grid display="flex" justifyContent="center" alignItems="center">
        //         {/* <Table /> */}
        //     </Grid>

        // </Grid>


        <Grid container xs={12}>
           

                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "3.5%", width: "100%", marginTop: "5%",flexDirection: "column" }}>
                            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "3.5%", width: "100%", marginTop: "5%" }}>
<IconAvatars /> 
                    <Typography >Hello {currentUser?.username} !</Typography>

                </div>
                    <Typography sx={{fontSize: 27}}> To review who's here: </Typography>
                <div style={{display: "flex", justifyContent: "center", cursor:"pointer"}}>
                <ListAltIcon sx={{ fontSize: 150 }} onClick={()=> navigate('/presentCheck')}/>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "left", alignItems: "left", flexDirection: "column"}}>
                <div>
                    <Button sx={{marginTop: 5, marginLeft: 8, fontSize: 12, color:'#0E9594', backgroundColor:'white', borderRadius:'8px', width:'100px'} }>Luz</Button>
                    <Button sx={{marginTop: 5, marginLeft: 5, fontSize: 12, color:'#0E9594', backgroundColor:'white', borderRadius:'8px', width:'100px'} }>Leave</Button>
                </div>
                <div>
                    <Button sx={{marginTop: 5, marginLeft: 8, fontSize: 12, color:'#0E9594', backgroundColor:'white', borderRadius:'8px', width:'100px'} }>My Luz</Button>
                    <Button sx={{marginTop: 5, marginLeft: 5, fontSize: 12, color:'#0E9594', backgroundColor:'white', borderRadius:'8px', width:'100px'} } onClick={() => navigate('/manage/student')} >New missing</Button>
                </div>
            </div>
        </Grid>
    )
    
}



export default Home;