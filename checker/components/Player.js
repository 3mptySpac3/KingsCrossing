// Player.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Player = ({ isPromoted }) => {
  return (
    <View style={[styles.piece, isPromoted && styles.promoted]} />
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
  },
});

export default Player;

