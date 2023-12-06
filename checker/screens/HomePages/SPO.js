//Single Player options (SPO)

import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SPO = ( {setCurrentScreen, setDifficulty} ) => {

    return (       
        <ImageBackground source={require('../../components/images/Bot.jpeg')} style={styles.background}>
            {/* Below are five touchable options online, easy, medium, hard, Extreme Mode */}
            <View style={styles.overlay}>
              
            <ImageBackground source={require('../../components/images/R.gif')} style={styles.border}
    imageStyle={{ borderRadius: 30 }} // Add this line to round the corners
    >
                <TouchableHighlight 
                style={styles.buttonHome}
                onPress={() => (setCurrentScreen('Home'))}
                >
                <FontAwesome name="home" size={24} color="black" />
                </TouchableHighlight>
                </ImageBackground>

                <ImageBackground source={require('../../components/images/wooden_border.jpg')} style={styles.border}
    imageStyle={{ borderRadius: 30 }} // Add this line to round the corners
    >
                <TouchableHighlight style={ styles.easy} onPress={() => (setCurrentScreen('MainGame'), setDifficulty('Normal'))}>
                <Text style={styles.buttonText}>Easy</Text>
                </TouchableHighlight>
                </ImageBackground>

                <ImageBackground source={require('../../components/images/wooden_border.jpg')} style={styles.border}
    imageStyle={{ borderRadius: 30 }} // Add this line to round the corners
    >
                <TouchableHighlight style={styles.medium} onPress={() => (setCurrentScreen('MainGame'), setDifficulty('Normal'))}>
                <Text style={styles.buttonText}>Normal</Text>
                </TouchableHighlight></ImageBackground>

                <ImageBackground source={require('../../components/images/wooden_border.jpg')} style={styles.border}
    imageStyle={{ borderRadius: 30 }} // Add this line to round the corners
    >
                <TouchableHighlight style={styles.hard} onPress={() => (setCurrentScreen('MainGame'), setDifficulty('Hard'))}>
                <Text style={styles.buttonText}>Hard</Text>
                </TouchableHighlight></ImageBackground>

                <ImageBackground source={require('../../components/images/wooden_border.jpg')} style={styles.border}
    imageStyle={{ borderRadius: 30 }} // Add this line to round the corners
    >
                <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>Timed play</Text>
                </TouchableHighlight></ImageBackground>
            </View>
        </ImageBackground>
    )
  }

export default SPO;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as per your design
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonHome: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      width: 250,
      height: 60,
      borderRadius: 30,
      elevation: 5, // for Android shadow
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      width: 250,
      height: 60,
      borderRadius: 30,
      backgroundImage: 'url(../../components/images/bot.jpeg)',
      elevation: 5, // for Android shadow
    },
    easy: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 250,
        height: 60,
        borderRadius: 30,
        elevation: 5, // for Android shadow
    },
    medium: {
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      width: 250,
      height: 60,
      borderRadius: 30,
      elevation: 5, // for Android shadow
  },
  hard: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 250,
    height: 60,
    borderRadius: 30,
    elevation: 5, // for Android shadow
},
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      // Add fontFamily if needed
    },
    border: {
      margin: 10,
      padding: 0,// Adjust border size

    },
  });