import useStudents from "../hooks/useStudents";
import {FC, useMemo} from "react";
import {Autocomplete, TextField} from "@mui/material";

const SearchStudent: FC<{onPick: (student: any) => void }> = ({onPick}) => {
    const { students } = useStudents();

    const userOptions = useMemo(() => {
        return students.map(s => {
            return {
                label: s.name,
                id: s.id
            }
        })
    }, [students])

    return <Autocomplete onChange={(event, newValue) => {
        onPick(newValue);
    }}
                         options={userOptions} noOptionsText="לא נמצאו חניכים" renderInput={(params) => <TextField {...params} placeholder="שם מלא"/>} />

}

export default SearchStudent;