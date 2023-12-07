// Checkerboard.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Player from './Player';
import Opponent from './Opponent';

const Checkerboard = () => {
  // Initialize the board
  const [board, setBoard] = useState(initializeBoard());
  const [selectedPiece, setSelectedPiece] = useState(null);

  // Function to initialize the board with players and opponents
  function initializeBoard() {
    let initialBoard = [];
    for (let row = 0; row < 8; row++) {
      initialBoard[row] = [];
      for (let col = 0; col < 8; col++) {
        if (row < 3 && (row + col) % 2 === 1) {
          initialBoard[row][col] = 'opponent';
        } else if (row > 4 && (row + col) % 2 === 1) {
          initialBoard[row][col] = 'player';
        } else {
          initialBoard[row][col] = null;
        }
      }
    }
    return initialBoard;
  }

  // Handle tap on cell
  const handleTap = (row, col) => {
    if (selectedPiece) {
      movePiece(selectedPiece.row, selectedPiece.col, row, col);
      setSelectedPiece(null);
    } else if (board[row][col]) {
      setSelectedPiece({ row, col });
    }
  };

  // Move piece from one cell to another
  const movePiece = (fromRow, fromCol, toRow, toCol) => {
    let newBoard = [...board];
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = null;
    setBoard(newBoard);
  };

  // Render cells
  const renderCell = (row, col) => {
    let content = null;
    let isBlackCell = (row + col) % 2 === 1;
    
    if (board[row][col] === 'player') {
      content = <Player />;
    } else if (board[row][col] === 'opponent') {
      content = <Opponent />;
    }

    return (
      <TouchableOpacity 
        key={`${row}-${col}`} 
        style={[styles.cell, isBlackCell ? styles.blackCell : styles.whiteCell]}
        onPress={() => handleTap(row, col)}
      >
        {content}
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={require('../components/images/wooden_border.jpg')} style={styles.border}>
    <ImageBackground source={require('../components/images/wooden_texture.jpg')} style={styles.background}>
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
        </View>

      ))}
    </View>
    </ImageBackground>
    </ImageBackground>
  );
};

const cellSize = 45; // Adjust the cell size if needed

const styles = StyleSheet.create({
  border: {
    padding: 20,// Adjust border size
    borderRadius: 8, // Adjust border radius
    // Add other styling for the border if needed
  },
  board: {
    flexDirection: 'column',
    // Add other styling for the board if needed
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: cellSize,
    height: cellSize,
  },
  blackCell: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
  },
  whiteCell: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
  },
});

export default Checkerboard;
