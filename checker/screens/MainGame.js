
import React, {useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Opponent from "../components/OpponentScore";
import User from "../components/PlayerScore";
import Checkerboard from "../components/Board";
import { getUserData } from "../components/Users"; // Import the function


export default function MainGame({setCurrentScreen, setDifficulty}){
    const playerData = getUserData();
    const opponentData = getUserData(); 
  
    return (
        <View style={styles.container}>
                        <ImageBackground source={require('../components/images/R.gif')} style={styles.head}
    imageStyle={{ borderRadius: 30 }} // Add this line to round the corners
    >
                <TouchableHighlight 
                activeOpacity={1}
                style={styles.buttonHome}
                onPress={() => setCurrentScreen('SPO')}
                >
                <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableHighlight>
                </ImageBackground>
            <View style={styles.scoreBoardTop}>
                <Opponent 
                opponentScore={0} 
                opponentIsNPC={true} 
                opponentProfile={opponentData}
                />
            </View>
            <View style={styles.board}>
                <Checkerboard />
            </View>
            <View style={styles.scoreBoardBottom}>
                <User
                playerScore={0} 
                playerProfile={playerData}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  head: {
    padding: 10,
    justifyContent: 'left',
    marginBottom: 20,
    width: 400,
    height: 60,
    borderRadius: 30,
    elevation: 5, // for Android shadow
  },

});
// In your game component
// import ScoreBoard from "../components/ScoreBoard"
// <ScoreBoard 
//   playerScore={playerScore} 
//   opponentScore={opponentScore} 
//   opponentIsNPC={isOpponentNPC} 
// />