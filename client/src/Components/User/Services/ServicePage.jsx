import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ServiceInfo from './ServiceInfo'
import ServicesList from './ServicesList'


const ServicePage = () => {

  const [id, setId] = useState('')

  const selectedService = (id)=> {
    setId(id)
  }

  // useEffect(()=>{
  //   setId('')
  // },[])

  return (
    <div>
      {id?  <ServiceInfo fetchId={selectedService} id={id} /> : <ServicesList fetchId = {selectedService}/>} 
        
       
    </div>
  )
}

export default ServicePage