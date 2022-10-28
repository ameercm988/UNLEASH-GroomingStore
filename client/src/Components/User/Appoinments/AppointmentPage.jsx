import React, { useState } from 'react'
// import { Container, Grid } from '@material-ui/core'
import DatePicker from './DatePicker'
import './AppointmentPage.css'
import TimePicker from './TimePicker'
import { toast } from 'react-toastify'

const AppointmentPage = () => {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const bookingData = {
    date, time
  }

  const submitHandler = async () => {
    try {
      if(!date || !time){
        toast('please select a date and time')
        return
      }
      console.log('submit');
      const res = await fetch('/api/users/appointment', {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(bookingData) 
      })
  
      const resData = await res.json()
      toast(resData)
      console.log(resData)
    } catch (error) {
      console.log(error);
    }
   
  }

  const dateFetcher = (value) => {
    console.log(Date(value),'from date fetcher')
    setDate(Date(value))
    
  }

  const timeFetcher = (value) => {
    console.log(value,'from time fetcher');
    setTime(value)
  }

  // console.log(date);

  return (
    // <Container className='main'>
    // <div className='container'>
    
    <div className='main'>
        <h1 className='lg:text-3xl sm:text-sm text-center text-yellow-500 lg:mr-96 lg:mb-9'>Book An Appointment</h1>

        {/* <Grid container className='appcontent-div'> */}
          <div className='lg:max-w-4xl bg-neutral-200 mx-auto lg:flex my-32'>

            <DatePicker fetchDate={dateFetcher}/>
            <TimePicker fetchTime={timeFetcher}/>
            <div>

          <button className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 text-white px-7 py-3 mt-32 mr-5  ..." onClick={submitHandler}>
        PROCEED
      </button>
            </div>
          </div>
        {/* </Grid> */}
    {/* </Container> */}
      </div>
    
    )
}

export default AppointmentPage





