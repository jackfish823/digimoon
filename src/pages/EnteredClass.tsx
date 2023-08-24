import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const EnteredClass = () => {
    const navigate = useNavigate();

    return (<div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
        <Typography sx={{fontSize: 40, paddingTop: 5}}>!איזה כיף</Typography>
        <Typography sx={{fontSize: 40, paddingTop: 1, paddingBottom: 5}}>!אתה בתוך השיעור</Typography>
        <img height={250} width={250} style={{marginBottom: 30}} src="https://www.liveabout.com/thmb/tuCjsaMq82e6wKG5U7fdEWpV-Cw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/78022427-56a9b11b5f9b58b7d0fe1a8c.jpg"/>
        <Button variant='contained' onClick={() => navigate('/home')}>צא מהשיעור</Button>
    </div>)
}

export default EnteredClass