import React, { useState } from 'react';

function Player({ name, color }) {
  const [selectedSquare, setSelectedSquare] = useState(null);

  // Function to handle a square click
  const handleSquareClick = (row, col) => {
    if (selectedSquare === null) {
      // If no square is selected, select the clicked square
      setSelectedSquare({ row, col });
    } else {
      // If a square is already selected, make a move
      // You can implement your move logic here
      console.log(`${name} moved from ${selectedSquare.row}-${selectedSquare.col} to ${row}-${col}`);
      setSelectedSquare(null); // Deselect the square
    }
  };

  return (
    <div className="player">
      <h2>{name}</h2>
      <div className={`player-piece ${color}`}></div>
      <p>{selectedSquare ? `Selected: ${selectedSquare.row}-${selectedSquare.col}` : 'Select a square'}</p>
      <div className="player-controls">
        <button onClick={() => handleSquareClick(1, 1)}>Move to 1-1</button>
        <button onClick={() => handleSquareClick(2, 2)}>Move to 2-2</button>
        {/* Add more buttons for different moves */}
      </div>
    </div>
  );
}

export default Player;
