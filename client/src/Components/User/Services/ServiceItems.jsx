import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import "./ServicesList.css";

const ServiceItems = ({servicetype, description, index}) => {
    
  return (
    <>
      <Box className="content" spacing={2}>
        <Grid item sm={2}>
          <h2>{index+1}</h2>
        </Grid>
        <Grid item sm={10}>
          <h3>{servicetype}</h3>
          <p>
            {description.slice(0,50)}
          </p>
          <Button variant="contained">MORE INFO</Button>
        </Grid>
      </Box>
    </>
  );
};

export default ServiceItems;
