/* eslint-disable no-use-before-define */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Home from "./views/Home";
import About from "./views/About";
import TopBar from "./components/TopBar";
import GroupList from "./components/GroupList";
import ContactList from "./components/ContactList";

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <div className="Main-content h-full w-full flex overflow-hidden pt-14">
        <div className="flex flex-row justify between h-full w-full bg-gradient-to-b from-robins-egg-blue-500 to-electric-violet-500">
          <GroupList />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <ContactList />
        </div>
      </div>
    </Router>
  );
};

export default App;
