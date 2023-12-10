// Checkerboard.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Player from './Player';
import Opponent from './Opponent';
import PlayerScore from './PlayerScore';
import OpponentScore from './OpponentScore';
import { getUserData } from "./Users"

const Checkerboard = () => {
  // Initialize the board
  const [board, setBoard] = useState(initializeBoard());
  const [selectedPiece, setSelectedPiece] = useState(null);
  // setting up players scores 
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const playerData = getUserData();
  const opponentData = getUserData(); 

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
    }
     else if (board[row][col]) {
      setSelectedPiece({ row, col });
    }
      // Checking for promotion
    if ((board[row][col] === 'player' && row === 0) || (board[row][col] === 'opponent' && row === 7)) {
      // Promote the piece
    }
  };

  // Move piece from one cell to another
//   const movePiece = (fromRow, fromCol, toRow, toCol) => {
//     // Check if the move is diagonal
//     if (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) {
//         let newBoard = [...board];
//         // Check for hops
//         if (Math.abs(fromRow - toRow) === 2) {
//             const middleRow = (fromRow + toRow) / 2;
//             const middleCol = (fromCol + toCol) / 2;
//             if (newBoard[middleRow][middleCol] !== null && newBoard[middleRow][middleCol] !== newBoard[fromRow][fromCol]) {
//                 // Remove the hopped piece
//                 newBoard[middleRow][middleCol] = null;
//                 // Increment score
//                 // Increment player or opponent score based on who moved
//             }
//         }
//         newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
//         newBoard[fromRow][fromCol] = null;
//         setBoard(newBoard);
//     }
//     if (board[fromRow][fromCol] === 'player' && !isPromoted && toRow > fromRow) {
//       return; // Player can't move backwards unless promoted
//   }
// };
  const movePiece = (fromRow, fromCol, toRow, toCol) => {
    let newBoard = [...board];
    if (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) {
        // For diagonal movement
        if (Math.abs(fromRow - toRow) === 2) {
            // Check for hops
            const middleRow = (fromRow + toRow) / 2;
            const middleCol = (fromCol + toCol) / 2;
            if (newBoard[middleRow][middleCol] !== null && newBoard[middleRow][middleCol] !== newBoard[fromRow][fromCol]) {
                newBoard[middleRow][middleCol] = null; // Remove the hopped piece
                // Increment score based on the player
                if (newBoard[fromRow][fromCol] === 'player') {
                    setPlayerScore(playerScore + 1);
                } else {
                    setOpponentScore(opponentScore + 1);
                }
            }
        }
        newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
        newBoard[fromRow][fromCol] = null;
        setBoard(newBoard);
    }
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
    <View style={styles.container}>
      <View style={styles.scoreBoardTop}>
        <OpponentScore opponentScore={opponentScore} opponentIsNPC={true} opponentProfile={opponentData} />
      </View>
      
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

      <View style={styles.scoreBoardBottom}>
        <PlayerScore playerScore={playerScore} playerProfile={playerData}/>
      </View>
      
      
    </View>
  );
};

const cellSize = 45; // Adjust the cell size if needed

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    alignItems: 'center',
    },
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
