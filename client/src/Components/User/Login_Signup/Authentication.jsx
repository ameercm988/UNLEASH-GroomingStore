import React from "react";
import GoogleAuth from "../GoogleAuth";
import './Authentication.css'

const Authentication = (props) => {

 

  return (
    <>
      <div className="container">
        <div className="card" style={props.style}>
          <div className="form">
            <div className="left-side">
              <img src={props.img} alt=""/>
            </div>

            <div className="right-side">
              <div className="register">
                {props.authTitle}
              </div>

              <div className="hello">
                {props.welcomeNote}
              </div>

             {props.children}

              <hr />
              <div className="or">
                <p>or signin with</p>
              </div>
              <div className="boxes">
                <i><GoogleAuth /></i>
                {/* <span>

                  <img src="https://imgur.com/XnY9cKl.png" alt=""/>
                </span>
                <span>
                  <img src="https://imgur.com/ODlSChL.png" alt=""/>
                </span>
                <span>
                  <img src="https://imgur.com/mPBRdQt.png" alt=""/>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
