//Npc 
// NPC.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const NPC = ({ size }) => {
  return <View style={[styles.npc, { width: size, height: size }]} />;
};

const styles = StyleSheet.create({
  npc: {
    backgroundColor: 'red', // Customize the color
    borderRadius: 50, // Round shape
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
});

export default NPC;
