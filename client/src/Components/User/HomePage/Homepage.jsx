import React from "react";
import { Grid } from "@material-ui/core";
import "./HomePage.css";
import "./ButtonHome.scss";

const Homepage = () => {
  return (
    <Grid container>
      <Grid className="banner-div" item xs={12}>
        {/* <img src={BannerPic} alt="" /> */}
        <h1 className="firstTag">COME TO </h1>
        <h1 className="secondTag">UNLEASH</h1>
        <h3 className="secondTag">
          We groom with gentle, loving care. We love what we do so we love your
          pet.
          <br /> We make your pets look their best! We're the bark of the town.
        </h3>
        <div className="button-class">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">EXPLORE MORE</span>
          </button>
        </div>
      </Grid>
      <Grid className="services-section" item xs={12} sm={6}>
    
      </Grid>
    </Grid>
  );
};

export default Homepage;
