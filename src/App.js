import React, { useState, useEffect } from 'react';
import './App.css';

function Key({ keyValue, pressedKey }) {
  return (
    <div className={`key ${pressedKey === keyValue ? 'glow' : ''}`}>
      {keyValue}
    </div>
  );
}

function App() {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPressedKey(event.key.toUpperCase());
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="keyboard">
          <div className="row">
            <Key keyValue="Q" pressedKey={pressedKey} />
            <Key keyValue="W" pressedKey={pressedKey} />
            <Key keyValue="E" pressedKey={pressedKey} />
            <Key keyValue="R" pressedKey={pressedKey} />
            <Key keyValue="T" pressedKey={pressedKey} />
            <Key keyValue="Y" pressedKey={pressedKey} />
            <Key keyValue="U" pressedKey={pressedKey} />
            <Key keyValue="I" pressedKey={pressedKey} />
            <Key keyValue="O" pressedKey={pressedKey} />
            <Key keyValue="P" pressedKey={pressedKey} />
          </div>
          <div className="row">
            <Key keyValue="A" pressedKey={pressedKey} />
            <Key keyValue="S" pressedKey={pressedKey} />
            <Key keyValue="D" pressedKey={pressedKey} />
            <Key keyValue="F" pressedKey={pressedKey} />
            <Key keyValue="G" pressedKey={pressedKey} />
            <Key keyValue="H" pressedKey={pressedKey} />
            <Key keyValue="J" pressedKey={pressedKey} />
            <Key keyValue="K" pressedKey={pressedKey} />
            <Key keyValue="L" pressedKey={pressedKey} />
          </div>
          <div className="row">
            <Key keyValue="Z" pressedKey={pressedKey} />
            <Key keyValue="X" pressedKey={pressedKey} />
            <Key keyValue="C" pressedKey={pressedKey} />
            <Key keyValue="V" pressedKey={pressedKey} />
            <Key keyValue="B" pressedKey={pressedKey} />
            <Key keyValue="N" pressedKey={pressedKey} />
            <Key keyValue="M" pressedKey={pressedKey} />
          </div>
        </div>
        <p>Ýttu á einhvern taka á lykklaborðinu þínu</p>
      </header>
      <footer>
        <p>Notaði react til að setja upp og gera verkefnið</p>
      </footer>
    </div>
  );
}

export default App;
