
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';

export default function MainGame(){
    return (
        <View style={styles.container}>
            <Text>MainGame</Text>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
// In your game component
// import ScoreBoard from "../components/ScoreBoard"
// <ScoreBoard 
//   playerScore={playerScore} 
//   opponentScore={opponentScore} 
//   opponentIsNPC={isOpponentNPC} 
// />