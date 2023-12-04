// Checkerboard.js
import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';

const Checkerboard = () => {
  const rows = new Array(8).fill(null);
  const columns = new Array(8).fill(null);

  return (
    <ImageBackground source={require('./images/wooden_border.jpg')} style={styles.border}
    imageStyle={{ borderRadius: 10 }} // Add this line to round the corners
    >
      <ImageBackground source={require('./images/wooden_texture.jpg')} style={styles.board}>
        {rows.map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {columns.map((_, columnIndex) => (
              <View 
                key={`${rowIndex}-${columnIndex}`} 
                style={[
                  styles.cell, 
                  (rowIndex + columnIndex) % 2 === 0 ? styles.blackCell : styles.whiteCell
                ]} 
              />
            ))}
          </View>
        ))}
      </ImageBackground>
    </ImageBackground>
  );
};

const cellSize = 47; // Adjust the cell size if needed

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
    backgroundColor: 'black',
    opacity: 0.8,
  },
  whiteCell: {
    backgroundColor: 'white',
    opacity: 0.5,
    backgroundimage: 'url(./images/wooden_texture.jpg)',
  },
});

export default Checkerboard;
