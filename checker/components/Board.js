import React, { useState } from 'react';
import './Checker.css';

const Square = ({ black, onClick, piece }) => {
  const className = `square ${black ? 'black' : 'white'} ${piece ? 'piece' : ''} ${piece === 'B' ? 'black-piece' : ''} ${piece === 'W' ? 'white-piece' : ''}`;
  return <div className={className} onClick={onClick} />;
};

const BoardRow = ({ rowNum, pieces, onClick }) => {
  let row = [];
  for (let i = 0; i < 8; i++) {
    row.push(<Square key={i} black={(rowNum + i) % 2 === 0} piece={pieces[i]} onClick={() => onClick(rowNum, i)} />);
  }
  return <div className="board-row">{row}</div>;
};

const Board = () => {
  const [pieces, setPieces] = useState(Array(8).fill().map(() => Array(8).fill(null)));

  const handleClick = (row, col) => {
    // Add your game logic here
    console.log(`Square at ${row},${col} was clicked`);
  };

  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push(<BoardRow key={i} rowNum={i} pieces={pieces[i]} onClick={handleClick} />);
  }
  return <div className="board">{board}</div>;
};

export default Board;