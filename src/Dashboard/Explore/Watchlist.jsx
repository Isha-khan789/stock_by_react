import React from "react";
import Fund from "../Portfolio/Fund";
import Deposit from "../Portfolio/Deposit";
import Review from "./Review";
import List from "./list";
// import Performance from "./Performance";
// import Charts from "./Charts";
// import Performance from "./Performance";
const Watchlist = () => {
  return (
    <>
      <div className="mt-5  gap-6">
        <Fund />
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:items-start gap-4 ">
          <List />
          <Review />
        </div>
        {/* <Charts/> */}
        {/* <Performance /> */}
      </div>
    </>
  );
};

export default Watchlist;


