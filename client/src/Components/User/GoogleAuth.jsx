import React from 'react'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
const GoogleAuth = (props) => {
  return (
    <GoogleOAuthProvider clientId='100947371868-oq3sm0s72shpedmikk08f73nclv64co4.apps.googleusercontent.com'>
        <GoogleLogin onSuccess={props.onSuccess}>

        </GoogleLogin>
    </GoogleOAuthProvider>
  )
}

export default GoogleAuth