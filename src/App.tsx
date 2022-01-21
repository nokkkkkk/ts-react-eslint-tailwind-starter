/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  interface Istate {
    people:{
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

  const [people, setPeople] = useState<Istate['people']>([]);

  // people.map(person => {
  //   person.age = 10;
  //   person.name = 'Gui';
  // });

  return (
    <div className="App flex-wrap bg-gray-500">
      <header className="App-header">
        <div className="text-green-700">
          <p>
            Un starter TypeScript - React - ESLint - TailWind.
          </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="text-red-400"
          href="https://ufood.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Look at a vue project instead
        </a>
      </header>
    </div>
  );
};

export default App;
