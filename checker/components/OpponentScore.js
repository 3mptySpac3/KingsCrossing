// OpponentScore.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OpponentScore = ({ opponentIsNPC, opponentProfile, opponentScore }) => {
  return (
    <View style={styles.scoreSection}>
      <Image source={{ uri: opponentProfile.picture }} style={styles.profilePic} />
      <Text style={styles.userName}>{opponentIsNPC ? 'NPC' : opponentProfile.name}</Text>
      <Text style={styles.score}>{opponentScore}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
scoreSection: {
        alignItems: 'center',
      },
});

export default OpponentScore;
