import React from "react";
import Pro from "./Pro";
import Fund from "./Fund";
import Refer from "./Refer";
import Deposit from "./Deposit";
import Get from "./Get";
import Recent from "./Recent";

const Portfolio = () => {
  return (
    <div>
      <Pro />
      <Fund />
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <Refer />

        <Deposit />
      </div>
    </div>
  );
};

export default Portfolio;
