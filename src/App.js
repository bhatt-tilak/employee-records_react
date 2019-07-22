import React from 'react';
import Mainpage from './containers/Mainpage/Mainpage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="http://localhost:3000/"><h1 className="mainHeading">Employee Records App</h1></a>
        <Mainpage />
    </div>
  );
}

export default App;
