import React from "react";
import { Grid } from "@material-ui/core";
import "./HomePage.css";
import "./ButtonHome.scss";
import ServicesList from "../Services/ServicesList";
import '../Services/ServicesList.css'

const Homepage = () => {
  return (
    <Grid container>
      <Grid className="banner-div" item xs={12} sm={12}>
        {/* <img src={BannerPic} alt="" /> */}
        <h1 className="firstTag">COME TO </h1>
        <h1 className="secondTag">UNLEASH</h1>
        <h3 className="secondTag">
          We groom with gentle, loving care. We love what we do so we love your
          pet.
          <br /> We make your pets look their best! We're the bark of the town.
        </h3>
        <div className="button-class">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">EXPLORE MORE</span>
          </button>
        </div>
      </Grid>
      <Grid className="services-section" item xs={12} sm={12}>
        <ServicesList />
      </Grid>
    </Grid>
  );
};

export default Homepage;
