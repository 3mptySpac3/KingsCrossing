// OpponentScore.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OpponentScore = ({ opponentIsNPC, opponentProfile, opponentScore }) => {
  return (
    <View style={styles.scoreSection}> 
      <View style={styles.leftSide}>        
        <Image source={{ uri: opponentProfile.picture }} style={styles.profilePic} />
        <Text style={styles.userName}>{opponentIsNPC ? 'NPC' : opponentProfile.name}</Text>
      </View>
     <Text style={styles.score}>{opponentScore}</Text>           
    </View>
  );
};

const styles = StyleSheet.create({
  scoreSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 100, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginBottom: 5,
    transform: [{rotate: '180deg'}],
  },
  leftSide: {
    justifyContent: 'flex-end',
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

export default OpponentScore;
