import {QrScanner} from '@yudiel/react-qr-scanner';
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ScanQR = () => {
    const navigate = useNavigate();

    return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }} >
        <Typography sx={{fontSize: 30, marginTop: 3, marginBottom: 5, textAlign: "center", width: '80%'}}>יש לסרוק את הברקוד על מנת לדווח נוכחות בשיעור של עידן</Typography>
        <div style={{height: 300, width: 300}}>
            <QrScanner
                videoStyle={{border: 'solid 3px black'}}
                onDecode={(result:any) => {
                    navigate('/inclass')
                }}
                onError={(error:any) => console.log(error?.message)}
            />
        </div>

    </div>
)
}

export default ScanQR;