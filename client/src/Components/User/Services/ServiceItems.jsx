import React, { useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import "./ServicesList.css";

const ServiceItems = ({servicetype, description, index, id, fetchId}) => {
  // console.log(id);
  // const [index, setIndex] = useState(null)

  const submitHandler = () => {
    // console.log(id, 'id')
    fetchId(id)

  }
    
  return (
    <>
      <Box className="content" spacing={2}>
        <Grid item sm={2}>
          <h2 className="text-amber-500">{index+1}</h2>
        </Grid>
        <Grid item sm={10}>
          <h3 className="text-xl font-semibold">{servicetype}</h3>
          <p>
            {description.slice(0,50)}...
          </p>
          <Button variant="contained" type="submit" onClick={submitHandler}>MORE INFO</Button>
        </Grid>
      </Box>
    </>
  );
};

export default ServiceItems;
