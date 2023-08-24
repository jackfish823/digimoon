import {Autocomplete, Box, Button, TextField, Typography} from "@mui/material";
import useStudents from "../hooks/useStudents";
import {DateTimePicker, LocalizationProvider, MobileDateTimePicker} from "@mui/x-date-pickers";
import moment, {Moment} from "moment";
import {useMemo, useState} from "react";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import SearchStudent from "../components/SearchStudent";
import {addBusyStudent} from "../handlers/addBusyStudent";

const AddMissingStudents = () => {
    const { students } = useStudents();

    const userOptions = useMemo(() => {
        return students.map(s => {
            return {
                label: s.name,
                id: s.id
            }
        })
    }, [students])

    const [fromValue, setFromValue] = useState<Moment | null>(
        moment(),
    );
    const [toValue, setToValue] = useState<Moment | null>(
        moment(),
    );
    const [student, setStudent] = useState<any>(null)
    const [description,setDescription] = useState("")

    const handleSubmit = () => addBusyStudent(student, fromValue, toValue, description)

    return <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Typography sx={{fontSize: 40}}>הזנת יציאה מלוז</Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Box sx={{display: 'flex', flexDirection: "column"}}>
                <SearchStudent onPick={setStudent}/>
                <MobileDateTimePicker sx={{marginTop: 3, marginBottom: 1}} label="זמן יציאה"
                                value={fromValue}
                                onChange={(newValue: Moment | null) => {setFromValue(newValue);}}
                />
                <MobileDateTimePicker sx={{marginTop: 2, marginBottom: 3}} label="זמן חזרה"
                                value={toValue}
                                onChange={(newValue: Moment | null) => {setToValue(newValue);}}
                />
                <TextField multiline placeholder="פירוט" onChange={(e) => {setDescription(e.target.value);}}/>
            </Box>
        </LocalizationProvider>
        <Button sx={{marginTop: 5}} onClick={handleSubmit} variant="contained">הוספה</Button>
    </div>
}

export default AddMissingStudents;