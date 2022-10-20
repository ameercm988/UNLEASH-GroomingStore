import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Profile = () => {
    const navigate = useNavigate()
    const user = useSelector((state)=>state.auth)
    console.log(user);
    const fetchData = async() => {
        const res = await fetch('/api/users/authorise')
        const userData = await res.json()
        if(userData) {
            console.log(userData,'xxx');
        } else {
            toast('authentication timed out')
        }
    }
    useEffect(() => {
    
    if(user.token) {
        fetchData()
       
    } else {
        toast('authentication failed please login again')
        navigate('/login')
    }
 
    }, [])
    

  return (
    <div>
        <h1>user profile</h1>
    </div>
  )
}

export default Profile