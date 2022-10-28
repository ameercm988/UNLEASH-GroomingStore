import React from "react";
import Layout from "./Components/User/Layout/Layout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import Homepage from "./Components/User/HomePage/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import EmailVerification from "./Pages/EmailVerification";
import Profile from "./Pages/Profile";
import ServicePage from "./Components/User/Services/ServicePage";
import AppointmentPage from "./Components/User/Appoinments/AppointmentPage";
// import { makeStyles, useTheme } from '@material-ui/core/styles'
// import useMediaQuery  from "@material-ui/core/useMediaQuery";

// const useStyles = makeStyles((theme) => ({
//   root : {
//     width : '100%',
//     hieght : '100%'
//   },
// }))

function App() {
  // const { token } = useSelector((state) => state.auth);
  // console.log(userExist,'aaaaaaaaaaaaaaaaaaa');

  // const classes = useStyles()
  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.down("xs"))
  // console.log(matches);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verify/:token" element={<EmailVerification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<ServicePage />} />
        {/* {token ? <Route path="/profile" element={<Profile />} /> : redirect('/')} */}
        <Route path="/appointments" element={<AppointmentPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

// <Layout>
//   <Routes>
//     <Route path="/" element={<Homepage/>}/>
//       {/* <Route index element={<Homepage/>}/> */}
//       <Route path="login" element={<LoginPage/>}/>
//       <Route path="signup" element={<SignUp/>}/>
//       <Route path="*" element={<ErrorPage/>}/>
//   </Routes>
//   </Layout>
