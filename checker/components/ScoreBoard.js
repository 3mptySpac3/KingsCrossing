// ScoreBoard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Player from './Players';

const ScoreBoard = ({ playerScore, opponentScore, opponentIsNPC, playerProfile, opponentProfile }) => {
  return (
    <View style={styles.scoreBoard}>
      <View style={styles.scoreSection}>
        <Image source={{ uri: playerProfile.picture }} style={styles.profilePic} />
        <Text style={styles.userName}>{playerProfile.name}</Text>
        <Text style={styles.score}>{playerScore}</Text>
      </View>

      <View style={styles.scoreSection}>
        <Image source={{ uri: opponentProfile.picture }} style={styles.profilePic} />
        <Text style={styles.userName}>{opponentIsNPC ? 'NPC' : opponentProfile.name}</Text>
        <Text style={styles.score}>{opponentScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0', // Customize as needed
    borderRadius: 10,
  },
  scoreSection: {
    alignItems: 'center',
  },
  playerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 20,
  },
  profilePic: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
  },
});

export default ScoreBoard;
