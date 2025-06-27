import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'; // Import the Greeting component

function App() {
  const [name, setName] = useState('World'); // Use the useState hook

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeting name={name} /> {/* Use the Greeting component with the 'name' prop */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;