// Date: 2023/11/27
// import { Pressable, View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "./HomePages/Home";
import Checkerboard from "../components/Board";
// import ScoreBoard from "../components/ScoreBoard";
import PlayerScore from "../components/PlayerScore";
import OpponentScore from "../components/OpponentScore";
import { getUserData } from "../components/Users"; // Import the function
import Navigation from '../Navigation';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';

export default function App() {
  const playerData = getUserData();
  const opponentData = getUserData(); // Modify to get actual opponent data

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
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
