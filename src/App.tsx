import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineEditor from './TimeLineEdit';
import TimeLine from './DropAndDrag'
import { Assets } from './Assets';
function App() {
  return (
    <>
      <TimelineEditor />
      <div className='edit__view'>
        <TimeLine />
        <Assets />
      </div>

    </>

  );
}

export default App;
