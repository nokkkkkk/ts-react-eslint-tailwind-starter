/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Home from './views/Home';
import About from './views/About';

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg bg-white">
          <ul className="navbar-nav mr-auto">
            <li>
              <a className="navbar-brand" href="/">
              </a>
            </li>
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
             <ul id="nav-mobile" className="right navbar-nav">
            <li className="float-right">
                  <a className="nav-link float-right" href="/" >Quit</a>
            </li>
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
          </Routes>
          <div>
           </div>

        </div>
      </Router>
  );
};

export default App;
