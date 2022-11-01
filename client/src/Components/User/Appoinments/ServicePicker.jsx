import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../Store/serviceSlice";

const ServicePicker = () => {
  const dispatch = useDispatch();

  const { services } = useSelector((state) => state.service);
  console.log(services, "services");
  useEffect(() => {
    dispatch(getServices());
  }, []);

  const serviceList = services?.map((ele) => {
    return (
      <div className="bg-white flex justify-between py-4">
        <div className="flex">
          <input className="ml-3 indeterminate:bg-gray-300" type="checkbox" />
          <h3 className="ml-3 text-lg text-yellow-500 font-medium">
            {ele.servicetype}
          </h3>
        </div>
        <p className="mr-3">₹ {ele.amount}</p>
      </div>
    );
  });
  console.log(serviceList);

  return (
    <div className="space-y-6 w-full p-12">
      <p>What services you need?</p>
      {serviceList}
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Subtotal :</p>
        <p className="mr-3 font-semibold">₹ 5800.00</p>
      </div>
      <hr className="my-2 h-px bg-gray-300 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default ServicePicker;
