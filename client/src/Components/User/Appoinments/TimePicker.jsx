import React, { useState } from "react";
import { FaHandPointDown, FaHandPointLeft } from "react-icons/fa";

const TimePicker = ({ fetchTime, date }) => {
  console.log(date, "passed date");
  const initialState = { index: null, buttonStyle: false };
  //   const [time, setTime] = useState("");
  const [state, setState] = useState(initialState);
  //   console.log(state, "b4 click");

  const clickHandler = (elem, index) => {
    // const slot = e.target.innerText
    // console.log(slot);
    // setTime(elem);
    console.log(index);
    setState({ index: index, buttonStyle: true });
    // index.setButtonStyle(true)
    // setButtonStyle(index = true)
    // console.log(state, "after click");
    fetchTime(elem);
    // setTime("");
    // setButtonStyle(false)
    // console.log(e);
    // console.log(time);
  };

  // useEffect(() => {
  //     // clickHandler()
  // },[])

  const timings = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const timeList = timings.map((elem, index) => {
    return (
      <div
        className={
          state.buttonStyle && state.index == index
            ? "border bg-yellow-500 border-yellow-500 px-5 cursor-pointer lg:text-lg sm:text-xs"
            : "border  border-yellow-500 px-5 cursor-pointer lg:text-lg sm:text-xs"
        }
        onClick={() => clickHandler(elem, index)}
        key={index}
      >
        {elem}:00
      </div>
    );
  });

  return (
    <div className="">
      {date ? (
        <p className="m-9 text-xs lg:text-xl flex">
          <FaHandPointDown />
          &nbsp;Choose a time slot
        </p>
      ) : (
        <p className="m-9 text-xs lg:text-xl flex">
          <FaHandPointLeft /> &nbsp;Please pick a date
        </p>
      )}

      <div className="grid lg:grid-cols-4 gap-4 m-12 sm:grid-cols-3">
        {timeList}
      </div>
      {/* <div>

      
      </div> */}
    </div>
  );
};

export default TimePicker;
