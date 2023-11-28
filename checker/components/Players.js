// Player.js
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

const Player = ({ onPress, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.player, { width: size, height: size }]} />
  );
};

const styles = StyleSheet.create({
  player: {
    backgroundColor: 'blue', // Customize the color
    borderRadius: 50, // Round shape
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
});

export default Player;
