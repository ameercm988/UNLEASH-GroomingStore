import React from "react";
import Layout from "./Components/User/Layout/Layout";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import Homepage from "./Components/User/HomePage/Homepage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);
function App() {
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
