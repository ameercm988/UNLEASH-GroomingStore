import { Link } from "react-router-dom";
import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <Link to={"/"}>
      <div className={styles["body"]}>
        <div className={styles["unicorn"]}>
          <center>

          <h1>404 ERROR PAGE</h1>
          </center>
        </div>
        {/* <div className={styles["container"]}>
        </div> */}
      </div>
    </Link>
  );
};

export default ErrorPage;
