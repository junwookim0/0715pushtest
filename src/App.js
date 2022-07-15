import React from 'react';
import { useState } from "react";
import './App.css';

function App() {
  const [nick, setNick] = useState("");


  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <p> 당신의 이름은 무엇입니까?</p>
          <input
              type="text"
              name="nick"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
          />
          <p>{"반갑습니다 "+ nick +" 님"}</p>
      </header>
    </div>
  );
}

export default App;
