import React, {useState} from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {  Grid } from "@material-ui/core";
import moment from "moment/moment";

export default function DatePicker({fetchDate}) {
  const [value, setValue] = useState(dayjs(Date.now()));

  const handleChange = (newValue) => {
    setValue(newValue);
    fetchDate(newValue)
    // setValue('')
  };


  return (
    <Grid className="m-9">
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            minDate={moment().toDate()}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Grid>
  );
}
