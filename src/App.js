import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [updatedTime, setUpdatedTime] = useState(time);
  const GetTime = () => {
    time = new Date().toLocaleTimeString();
    setUpdatedTime(time);
  };
  return (
    <>
      <div className='main'>
        <h1>{updatedTime}</h1>
        <button onClick={GetTime}>Get time</button>
      </div>
    </>
  );
};

export default App;
