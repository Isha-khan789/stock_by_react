import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Athlete from "./Components/Athlete";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Question from "./Components/Question";
import Trusted from "./Components/Trusted";
import Works from "./Components/Works";
import Question2 from "./Components/Question2";
import Contact from "./Components/Contact";
import Footerr from "./Components/Footerr";
import Login from "./Components/Login";
// import index from "./Dashboard/index.jsx";
import Sign from "./Components/Sign";
// import Sidebar from "./Dashboard/Sidebar";
import Dash_layout from "./Dashboard/Layout/Dash_layout";
import Portfolio from "./Dashboard/Portfolio/Portfolio.jsx";
import Explore from "./Dashboard/Explore/Explore.jsx";
import Account from "./Dashboard/Account setting/account.jsx";
import Trans from "./Dashboard/Transaction/Trans.jsx";
// import index from "./Dashboard/Explore/index.jsx";
function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Athlete />
      <Trusted />
      <Question />
      <Question2 />
      <Contact />
      <Footerr />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/dashboard" element={<Dash_layout />}>
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path="/index " element={<index />}></Route> */}
          <Route path="explore" element={<Explore />}></Route>
          <Route path="account" element={<Account />}></Route>
          <Route path="transaction" element={<Trans />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
