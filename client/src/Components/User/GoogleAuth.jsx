import React from 'react'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { tokenState } from '../../Store/AuthSlice'
const GoogleAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onGoogleLogin = async (data) => {
    // console.log(data,'from googleauth')
    try {
      const body = { googleCredentials : data?.credential}
      const res = await fetch('/api/users/google-verify', {
        method : 'POST',
        body : JSON.stringify(body),
        headers : {'Content-Type' : 'application/json'},
        credentials: 'include'
      })
      const resData = await res.json()
      // console.log(resData);
      if(res.ok){
        dispatch(tokenState.setToken(resData.token))
        toast(resData)
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  const onError = () => {
    toast('Google crashed')
  }

  return (

    <GoogleOAuthProvider clientId='100947371868-oq3sm0s72shpedmikk08f73nclv64co4.apps.googleusercontent.com'>
        <GoogleLogin onSuccess={onGoogleLogin} onError={onError}>

        </GoogleLogin>
    </GoogleOAuthProvider>
  )
}

export default GoogleAuth