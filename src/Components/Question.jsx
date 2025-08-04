import React from "react";
import Accordian from "./Accordian";

const Question = () => {
  return (
    <div className="bg-black">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-6xl px-4 py-2 mt-9 font-display">
          Frequently Asked Questions
        </h1>
        <p className="text-white/80  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div>
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default Question;
