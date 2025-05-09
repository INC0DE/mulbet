import React from "react";
import Hero from "./Home/Hero";
import Introduction from "./Home/Introduction";
import Mulbet from "./Home/Mulbet";
import Members from "./Home/Members";
import Collage from "./Home/Collage";

const home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Introduction />
      <Mulbet />
      <Members />
      <Collage />
    </div>
  );
};

export default home;
