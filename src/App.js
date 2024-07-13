// src/App.js
import React, { useState } from 'react';
import Draggable from './components/Draggable';
import './App.css';

function App() {
  const [parentCount, setParentCount] = useState(0);
  const [zIndex, setZIndex] = useState(1); // Initial z-index for parent Draggable components

  const addParent = () => {
    setParentCount(parentCount + 1);
    setZIndex(zIndex + 1); // Increase z-index for each new parent
  };

  return (
    <div className="app">
      <div className="container">
        <Draggable depth={1} zIndex={zIndex} />
        {[...Array(parentCount)].map((_, index) => (
          <Draggable key={index + 2} depth={index + 2} zIndex={zIndex - index} />
        ))}
      </div>
      <button className="add-parent-button" onClick={addParent}>
        Add Parent
      </button>
    </div>
  );
}

export default App;
