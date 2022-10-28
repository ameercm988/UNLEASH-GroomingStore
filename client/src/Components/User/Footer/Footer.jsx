import React from "react";
import styles from "./footer.module.css";
import logo from "../../../Assets/Unleash+logo.png";
import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid item sm={12}>
      <footer className={styles["site-footer"]}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className="col-sm-12 col-md-6">
              <img src={logo} alt="" />
              <ul className={styles["footer-links"]}>
                <li>
                  <a href="">Address : Calicut, Kerala</a>
                </li>
                <li>
                  <a href="">Phone : +91 9XXXXXXXX1</a>
                </li>
                <li>
                  <a href="">Email : unleash@gmail.com</a>
                </li>
                <li>
                  <a href="">Website : www.unleash.com</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className={styles["footer-links"]}>
                <li>
                  <a href="">Book Your Appointments</a>
                </li>
                <li>
                  <a href="">Price Table</a>
                </li>
                <li>
                  <a href="">Our latest news</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Recent Blogs</h6>
              <ul className={styles["footer-links"]}>
                <li>
                  <a href="">Safe pet grooming - september 9,2022</a>
                </li>
                <li>
                  <a href="">Groomers wake up! - july 9,2022</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        {/* <div class="container"> */}
        {/* <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
          <a href="#">UNLEASH</a>.
          </p>
          </div>
          
          <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
              </div>
            </div> */}
        {/* </div> */}
      </footer>
    </Grid>
  );
};

export default Footer;
