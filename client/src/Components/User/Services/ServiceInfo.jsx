import React, { useEffect } from "react";
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../Store/serviceSlice";

const ServiceInfo = ({ id, fetchId }) => {
  //   const dispatch = useDispatch();

  const { services } = useSelector((state) => state.service);

  //   useEffect(() => {
  //     dispatch(getServices());
  //   }, []);
  const serviceInfo = services.find((service) => service._id === id);
  // console.log(serviceInfo,'infoooooooooo')

  //   const seviceInfo = services.map((elem, index) => {
  //     return(
  //         <>
  //         <div>
  //         <h1>{index+1} {elem.servicetype}</h1>
  //         <p>{elem.description}</p>
  //         </div>
  //         <div>
  //             <img src={elem.image} alt="" />
  //         </div>
  //         </>
  //     )
  //   });

  return (
    <>
     
        <button className="rounded-full bg-yellow-500 m-9 h-12 w-12" onClick={() => fetchId("")}>
          <FaArrowLeft className="h-6 w-8 ml-2"/>
        </button>
      
    <div className="flex m-32 grid-cols-2 gap-6">
        
      <div className="">
        <h1 className="text-4xl font-semibold pb-7"> {serviceInfo?.servicetype}</h1>
        <p className="m-5 tracking-widest leading-9">{serviceInfo?.description}</p>
      </div>
      <div className="col-span-2">
        <img className="" src={serviceInfo?.image} style={{minWidth:"50vh"}} alt="" />
      </div>
     
    </div>
    </>
  );
};

export default ServiceInfo;
