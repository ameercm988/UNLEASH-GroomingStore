import React, { useEffect, useState, useRef } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./EmailVerification.css";

const EmailVerification = () => {
  const [response, setResponse] = useState(false);

  const inputRef = useRef();

  const { token } = useParams();
  const navigate = useNavigate();
  console.log(token);

  const clickHandler = async () => {
    const res = await fetch(`/api/users/verify/${token}`);
    const response = await res.json();
    if (response.tokenVerified) {
        // toast('Email verification success')
      setResponse(true);
    }
  };

  const clickNavigator = async () => {
    if (response) {
      navigate("/login", {
        replace: true,
      });
    } else {
      let email = inputRef.current.value;
      const res = await fetch(`/api/users/reverify`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const response = await res.json();
      if (response.emailTokenSentAgain) {
        toast('Check Email for verification')
        navigate("/login", {
          replace: true,
        });
      }
    }
  };

  useEffect(() => {
    clickHandler();
  }, []);

  const verificationStatus = (
    <div className="success_page">
      <center className="centre-tag">
        <h2>Email verification success</h2>
        <button className="custom-btn btn-12" onClick={clickNavigator}>
          <span>Click!</span>
          <span>Scroll Over</span>
        </button>
      </center>
    </div>
  );

  const failedStatus = (
    <div className="success_page">
      <center className="centre-tag">
        <h2>Email verification Failed</h2>
        <div>

        <input type="email" placeholder="Re-enter your email" ref={inputRef} />
        </div>
        <button className="custom-btn btn-12" onClick={clickNavigator}>
          <span>Click!</span>
          <span>Scroll Over</span>
        </button>
      </center>
    </div>
  );

  return (
    <div className="container">
      <div>{response ? verificationStatus : failedStatus}</div>
    </div>
  );
};

export default EmailVerification;
