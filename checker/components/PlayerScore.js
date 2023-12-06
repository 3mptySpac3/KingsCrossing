// PlayerScore.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayerScore = ({ playerScore, playerProfile }) => {
  return (
    <View style={styles.scoreSection}>
      <View style={styles.leftSide}>
        <Image source={{ uri: playerProfile.picture }} style={styles.profilePic} />
        <Text style={styles.userName}>{playerProfile.name}</Text>
      </View>
      <Text style={styles.score}>{playerScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 115, 155, 0.5)',
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginTop: 5,
  },
  leftSide: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'skyblue',
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  score: {
    padding: 4,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
  },
});

export default PlayerScore;
