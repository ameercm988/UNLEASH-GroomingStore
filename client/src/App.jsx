import React from "react";
import Layout from "./Components/User/Layout/Layout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import {useSelector} from 'react-redux'
import SignUp from "./Pages/SignUp";
import Homepage from "./Components/User/HomePage/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import EmailVerification from "./Pages/EmailVerification";
import Profile from "./Pages/Profile";




function App() {
 
  const {token} = useSelector((state)=>state.auth)
  // console.log(userExist,'aaaaaaaaaaaaaaaaaaa');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verify/:token" element={<EmailVerification />} />
        <Route path="/profile" element={<Profile />} />
        {/* {token ? <Route path="/profile" element={<Profile />} /> : redirect('/')} */}
        
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
