import React from "react";
import Layout from "./Components/User/Layout/Layout";
import Header from "./Components/User/Header/Header";
// import logo from './Assests/Unleash+logo.png'
// import logo from '../public/Assests/Unleash+logo.png'

import Authentication from "./Components/User/Login_Signup/Authentication";

function App() {
  return (
    <div>
      <Layout>
        <Authentication />
        
        
      </Layout>
    </div>
  );
}

export default App;
