import React, { useState, useReducer } from "react";
import { AiFillWarning } from "react-icons/ai";
import Authentication from "../Components/User/Login_Signup/Authentication";
import signUpPic from "../Assets/signup image.jpg";
import "../Components/User/Login_Signup/Authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//In signup i used useReducer

//dynamic props
const authTitle = (
  <p>
    Already a member? <Link to="/login">Login Now</Link>
  </p>
);
const style = { height: "650px", width: "1000px" };
const welcomeNote = (
  <>
    <h2>Hello There!</h2>
    <h4>What took you so long! </h4>
  </>
);
// const onGoogleLogin = async (data) => {
//   // console.log(data, "datafromsignup");
//   try {
//     const body = { googleCredentials: data?.credential };
//     const res = await fetch("/api/users/signup", {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: { "Content-Type": "application/json" },
//     });
//     const resData = await res.json();
//     toast(resData);
//     console.log(resData);
//   } catch (error) {
//     // alert("failed to fetch");
//     toast.error("failed to fetch");
//   }
// };

const reducerFunction = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "F_NAME_ERR":
      return { ...state, firstname: true };
    case "F_NAME_SOLVE":
      return { ...state, firstname: false };

    case "L_NAME_ERR":
      return { ...state, lastname: true };
    case "L_NAME_SOLVE":
      return { ...state, lastname: false };

    case "EMAIL_ERROR":
      return { ...state, email: true };
    case "EMAIL_SOLVE":
      return { ...state, email: false };

    case "PASSWORD_ERR":
      return { ...state, password: true };
    case "PASSWORD_SOLVE":
      return { ...state, password: false };

    case "C_PASSWORD_ERR":
      return { ...state, confirmpassword: true };
    case "C_PASSWORD_SOLVE":
      return { ...state, confirmpassword: false };

    default:
      toast("oodiko");
      return;
  }
};

const SignUp = () => {
  const navigate = useNavigate()
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [inputs, setInputs] = useState(initialState);

  //   const [danger, setDanger] = useState(true);

  const initialReducerState = {
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmpassword: false,
  };

  const [state, dispatch] = useReducer(reducerFunction, initialReducerState);

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "firstname") {
      value.length < 3
        ? dispatch({ type: "F_NAME_ERR" })
        : dispatch({ type: "F_NAME_SOLVE" });
    } else if (name === "lastname") {
      value.length < 1
        ? dispatch({ type: "L_NAME_ERR" })
        : dispatch({ type: "L_NAME_SOLVE" });
    } else if (name === "email") {
      value.length < 3 || !value.includes("@")
        ? dispatch({ type: "EMAIL_ERROR" })
        : dispatch({ type: "EMAIL_SOLVE" });
    } else if (name === "password") {
      value.length < 5
        ? dispatch({ type: "PASSWORD_ERR" })
        : dispatch({ type: "PASSWORD_SOLVE" });
    } else if (name === "confirmpassword") {
      console.log(inputs.password);
      value !== inputs.password
        ? dispatch({ type: "C_PASSWORD_ERR" })
        : dispatch({ type: "C_PASSWORD_SOLVE" });
    }

    setInputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (inputs.firstname === "") dispatch({ type: "F_NAME_ERR" });
    else if (inputs.lastname === "") dispatch({ type: "L_NAME_ERR" });
    else if (inputs.email === "") dispatch({ type: "EMAIL_ERROR" });
    else if (inputs.password === "") dispatch({ type: "PASSWORD_ERR" });
    else if (inputs.confirmpassword === "")
      dispatch({ type: "C_PASSWORD_ERR" });
    else console.log("form data validated");

    try {
      if (
        !inputs.firstname ||
        !inputs.lastname ||
        !inputs.email ||
        !inputs.password
      ) {
        toast("Please fill all the fields");
      } else {
        
        const userData = JSON.stringify(inputs);
        const res = await fetch("/api/users/signup", {
          method: "POST",
          body: userData,
          headers: { "Content-Type": "application/json" },
        });
        let resData = await res.json();
        toast(resData, {
          position: toast.POSITION.TOP_RIGHT,
          className:"toast-message"
        });
        console.log(resData, "resssssdaaattaaaa");
        setInputs(initialState);
        if(res.ok){
          navigate('/login', {replace : true})
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      toast.error(error);
    }
  };

  // let formValid = false

  return (
    <Authentication
      authTitle={authTitle}
      style={style}
      img={signUpPic}
      welcomeNote={welcomeNote}
      // onGoogleLogin={onGoogleLogin}
    >
      <form onSubmit={submitHandler}>
        <div className="input_text">
          <input
            className={state.firstname ? "warning" : ""}
            type="text"
            placeholder="Enter Firstname"
            name="firstname"
            value={inputs.firstname}
            onChange={inputEvent}
            // required={true}
          />
          <p className={`${!state.firstname ? "danger" : ""}`}>
            <AiFillWarning className="fa fa-warning" />
            Enter a valid firstname
          </p>
        </div>

        <div className="input_text">
          <input
            className={state.lastname ? "warning" : ""}
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            value={inputs.lastname}
            onChange={inputEvent}
          />
          <p className={`${!state.lastname ? "danger" : ""}`}>
            <AiFillWarning className="fa fa-warning" />
            Enter a valid lastname
          </p>
        </div>

        <div className="input_text">
          <input
            className={state.email ? "warning" : ""}
            type="text"
            placeholder="Enter email"
            name="email"
            value={inputs.email}
            onChange={inputEvent}
          />
          <p className={`${!state.email ? "danger" : ""}`}>
            <AiFillWarning className="fa fa-warning" />
            Enter a valid Email
          </p>
        </div>

        <div className="input_text">
          <input
            className={state.password ? "warning" : ""}
            type="password"
            placeholder="Enter password"
            name="password"
            value={inputs.password}
            onChange={inputEvent}
          />
          <p className={`${!state.password ? "danger" : ""}`}>
            <AiFillWarning className="fa fa-warning" />
            password is weak
          </p>
        </div>

        <div className="input_text">
          <input
            className={state.confirmpassword ? "warning" : ""}
            type="password"
            placeholder="Re-Enter password"
            name="confirmpassword"
            value={inputs.confirmpassword}
            onChange={inputEvent}
          />
          <p className={`${!state.confirmpassword ? "danger" : ""}`}>
            <AiFillWarning className="fa fa-warning" />
            passwords doesn't match
          </p>
        </div>

        <div className="btn">
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    </Authentication>
  );
};

export default SignUp;
