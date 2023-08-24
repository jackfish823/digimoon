import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function SelectGroup() {
  return (
    <FormControl>
      <FormLabel id='demo-row-radio-buttons-group-label'>קבוצות</FormLabel>
      <FormGroup aria-label='position' row>
        <FormControlLabel
          value='1'
          control={<Checkbox />}
          label='1'
          labelPlacement='start'
        />
        <FormControlLabel
          value='2'
          label='2'
          control={<Checkbox />}
          labelPlacement='start'
        />
        <FormControlLabel
          value='All'
          label='All'
          control={<Checkbox />}
          labelPlacement='start'
        />
      </FormGroup>
    </FormControl>
  );
}
