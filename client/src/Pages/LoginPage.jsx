import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";
import Authentication from "../Components/User/Login_Signup/Authentication";
import loginPic from "../Assets/woman-cuddling-with-her-dog.jpeg";
import {useDispatch} from 'react-redux'
import { toast } from "react-toastify";
import {tokenState} from '../Store/AuthSlice'
import "../Components/User/Login_Signup/Authentication.css";

//In login i used useState

// dynamicProps
const authTitle = (
  <p>
    Not a member? <Link to="/signup">Register Now</Link>
  </p>
);
const style = { height: "500px", width: "800px" };
const welcomeNote = (
  <>
    <h2>Hello Again!</h2>
    <h4>Welcome back you have been missed! </h4>
  </>
);

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  }

  const [inputs, setinputs] = useState(initialState);

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [danger, setdanger] = useState(true);

  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(value);
    if (name === "email") {
      value.length > 3 && value.includes("@")
        ? setdanger(true)
        : setdanger(false);
    }
    setinputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setwarnemail(false);
    setwarnpass(false);
    // console.log(inputs.email.includes("@"), inputs.email.length < 1);
    if (!inputs.email.includes("@") || inputs.email.length < 3) {
      // console.log("first");
      setdanger(false);
      return;
    }
    if (inputs.email === "") {
      setwarnemail(true);
    } else if (inputs.password === "") {
      setwarnpass(true);
    } else {
      setdanger(true);
      // alert("Logged in Successfully");
    }

    try {
      if (!inputs.email || !inputs.password) {
        toast("Fill the required fields");
      } else {
        const userData = JSON.stringify(inputs);
        const res = await fetch("/api/users/login", {
          method: "POST",
          body: userData,
          headers: { "Content-Type": "application/json" },
        });
        const response = await res.json();
        toast(response);
        console.log(response);
        setinputs(initialState)
        console.log(res.ok);
        if (res.ok) {
          dispatch(tokenState.setToken(response.token))
          navigate("/", { replace: true });
        }
      }
    } catch (error) {
      toast(error);
    }
  };

  const Eye = () => {
    if (pass === "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };

  return (
    <Authentication
      authTitle={authTitle}
      style={style}
      img={loginPic}
      welcomeNote={welcomeNote}
    >
      <form onSubmit={submitHandler}>
        <div className="input_text">
          <input
            className={` ${warnemail ? "warning" : ""}`}
            type="text"
            placeholder="Enter Email"
            name="email"
            value={inputs.email}
            onChange={inputEvent}
          />
          <p className={` ${danger ? "danger" : ""}`}>
            <AiOutlineWarning className="fa fa-warning" />
            Please enter a valid email address.
          </p>
        </div>
        <div className="input_text">
          <input
            className={` ${warnpass ? "warning" : ""}`}
            type={pass}
            placeholder="Enter Password"
            name="password"
            value={inputs.password}
            onChange={inputEvent}
          />
          <i onClick={Eye}>
            {eye ? (
              <FaEyeSlash className="fa-eye-slash" />
            ) : (
              <FaEye className="fa-eye" />
            )}
          </i>
        </div>
        <div className="recovery">
          <p>Recovery Password</p>
        </div>
        <div className="btn">
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </Authentication>
  );
};

export default LoginPage;
