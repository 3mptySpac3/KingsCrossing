// Date: 2023/11/27
// import { Pressable, View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
// App.js
import React from 'react';
import HomePage from "./Home";
import { StyleSheet, View } from 'react-native';
import Checkerboard from "../components/Board";
// import ScoreBoard from "../components/ScoreBoard";
import PlayerScore from "../components/PlayerScore";
import OpponentScore from "../components/OpponentScore";
import { getUserData } from "../components/Users"; // Import the function

export default function App() {
  const playerData = getUserData();
  const opponentData = getUserData(); // Modify to get actual opponent data

  return (
    
    <View style={styles.container}>
      <NavBar />
      {/* <View style={styles.scoreBoardTop}>
  
        <PlayerScore
          score={0}
          profile={playerData}
        />
      </View>
      <View style={styles.board}>
        <Checkerboard />
      </View>
      <View style={styles.scoreBoardBottom}>
        <OpponentScore
          score={0}
          profile={opponentData}
          isNPC={true}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scoreBoardTop: {
    // Style for top scoreboard
  },
  scoreBoardBottom: {
    // Style for bottom scoreboard
  },
  board: {
    // Style for checkerboard
    alignItems: 'center',
  },
});
