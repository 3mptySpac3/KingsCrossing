// Opponent.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Opponent = ({ isPromoted }) => {
  return (
    <View style={[styles.piece, isPromoted && styles.promoted]} />
  );
};

const styles = StyleSheet.create({
  piece: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
  promoted: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundImage: 'radial-gradient(blue, yellow)'
  },
});

export default Opponent;
