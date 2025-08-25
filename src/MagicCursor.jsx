import React, { useEffect } from 'react';
import './MagicCursor.css';

const MagicCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div id="cursor" />
    </div>
  );
};

export default MagicCursor;
