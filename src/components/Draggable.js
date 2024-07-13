// src/Draggable.js
import React, { useState } from 'react';
import './Draggable.css';

const Draggable = ({ depth, zIndex }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = e.clientX - startX;
        const newY = e.clientY - startY;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={`draggable depth-${depth}`} style={{ left: position.x, top: position.y, zIndex: zIndex }}>
      <div className="title-bar" onMouseDown={handleMouseDown}>
        Drag Me
      </div>
      <div className="content">
        <p>Draggable Content</p>
      </div>
    </div>
  );
};

export default Draggable;
