import React from "react";
import Card from "./Card";
import data from "../data.json";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen text-white px-4 gap-5 bg-red-200 font-bold">
      {/* <h2 className="text-center">Well Come TO About</h2> */}
      {/* <Profile data={user}/> */}
      <Card data={data} />
    </div>
  );
};

export default About;
