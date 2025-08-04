import React from "react";
import Fund from "../Portfolio/Fund";
import Balls from "./Balls";
import Deposit from "../Portfolio/Deposit";
import Watch from "./Watch";
const Explore = () => {
  return (
    <div className="mt-5">
      <Fund />
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <Balls />
        <Watch />
      </div>
    </div>
  );
};

export default Explore;
