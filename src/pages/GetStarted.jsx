import React, { useState } from "react";

function GetStarted() {
  const [display, setDisplay] = useState(true);
  const [name, setName] = useState(true);
  const [skill, setSkill] = useState("web developement");

  let content;
  if (name) {
    content = <p>kashif</p>;
  } else {
    content = <p>saqlain</p>;
  }

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleClickName = () => {
    setName(!name);
  };

  const handleSkill = () => {
    setSkill((prevSkill) =>
      prevSkill === "web development" ? "Amazon" : "web development"
    );
  };
  return (
    <div className="w-full  text-center mt-10">
      {/* conditional rendering using if else  */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={handleClick}
      >
        Click me
      </button>
      {display ? <p>hello world</p> : <p>good bye world</p>}

      {/* conditional rendering using ternary operators  */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={handleClickName}
      >
        Click me
      </button>
      {content}

      {/* consditional rendering using logical operators */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={handleSkill}
      >
        Click me
      </button>
      <br />
      {skill}
    </div>
  );
}

export default GetStarted;
