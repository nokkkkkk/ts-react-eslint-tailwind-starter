import React from "react";
import logo from "../logo.svg";

const About: React.FC = () => {
  return (
    <div className="App flex-wrap bg-gray-500">
      <header className="App-header">
        <div className="text-green-700">
          <p>About Page</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>About our great UGram app !!!</h1>
    </div>
  );
};

export default About;
