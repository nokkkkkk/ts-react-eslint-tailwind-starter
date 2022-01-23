/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import List from './components/List';

const App: React.FC = () => {
  interface Istate {
    people:{
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'LeBron James',
      url: 'https://en.wikipedia.org/wiki/Pierre_Person#/media/File:Pierre-Person.jpg',
      age: 36,
      note: 'a note !'
    }
  ]);

  return (
    <div className="App flex-wrap bg-gray-500">

      <List people={people} />

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
