// Player.js
import {React, useState} from 'react';
import { View, StyleSheet } from 'react-native';

const Player = ({ isPromoted }) => {
  const [color, setColor] = useState(styles.piece); 
  const pieceStyle = isPromoted ? [styles.piece, styles.promoted] : styles.piece;
  return (
    <View style={pieceStyle} />
  );
};

const styles = StyleSheet.create({
  piece: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  promoted: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundImage: 'radial-gradient(red, yellow)'
  },
});

export default Player;

