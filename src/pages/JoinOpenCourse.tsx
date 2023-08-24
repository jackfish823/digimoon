import {Button, ButtonBase, Fab, TextField, Typography} from "@mui/material";
import {useAuth} from "../hooks/useAuthContext";
import {useState} from "react";

const MainStep = ({user, onJoin, onCreate}: any) => {
    return (<>
        <Typography style={{direction: 'rtl', marginTop: 20, fontSize: 20}}>
            שלום {user.username}!
        </Typography>
        <Typography style={{direction: 'rtl',  fontSize: 20}}>
            בחר באפשרות שמתאימה לך
        </Typography>
        <Fab onClick={onJoin} sx={{height: 200, width: 200, marginTop: 3}} color="primary" aria-label="add">
            הצטרף לקורס קיים
        </Fab>
        <Fab onClick={onCreate} sx={{height: 200, width: 200, marginTop: 5}} color="primary" aria-label="add">
            צור קורס חדש
        </Fab></>)
}

const JoinCourse = ({user, onBack}: any) => {
    return (<>
        <Typography style={{direction: 'rtl', marginTop: 20, fontSize: 20}}>
            שלום {user.username}!
        </Typography>
        <Typography style={{direction: 'rtl',  fontSize: 20, textAlign: "center", width: '80%', paddingBottom: 30}}>
            אנא הזן את הקוד שקיבלת ממפקד הקורס על מנת להצטרף!
        </Typography>
        <TextField placeholder="קוד קורס" />
        <Button sx={{marginTop: 3}} variant="contained">הצטרף</Button>
        <Button sx={{marginTop: 1}} onClick={onBack}>חזור</Button>
    </>)
}

const JoinOpenCourse = () => {
    const {currentUser} = useAuth()

    const [option, setOption] = useState('pick')

    return (
        <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {option === 'pick' && <MainStep user={currentUser} onJoin={() => setOption('join')} onCreate={() => setOption('create')}/>}
            {option === 'join' && <JoinCourse user={currentUser} onBack={() => setOption('pick')} />}
        </div>
    )
}

export default JoinOpenCourse;