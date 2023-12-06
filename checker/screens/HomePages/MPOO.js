//Single Player options (SPO)

import React, {useState} from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';

const MPOO = () => {
  const [currentScreen, setCurrentScreen] = useState('MPOO');

  if (currentScreen === 'MPOO') {
    return (       
        <ImageBackground source={require('../../components/images/Bot.jpeg')} style={styles.background}>
            {/* Below are five touchable options online, easy, medium, hard, Extreme Mode */}
            <View style={styles.overlay}>
                <TouchableHighlight 
                style={styles.buttonHome}
                onPress={() => setCurrentScreen('Home')} >
                <FontAwesome name="home" size={24} color="black" />
                </TouchableHighlight>
                <Text style={styles.buttonText}>Select Mode/Difficulty</Text>

                <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>There is Nothing Here For Now..</Text>
                </TouchableHighlight>

            </View>
        </ImageBackground>
    );
  }
  else if (currentScreen === 'Home') {
    return <Home />;
  }
};
export default MPOO;

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
      width: 200,
      height: 60,
      backgroundColor: 'yellow',
      borderRadius: 30,
      elevation: 5, // for Android shadow
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      width: 200,
      height: 60,
      backgroundColor: 'yellow',
      borderRadius: 30,
      elevation: 5, // for Android shadow
    },
    buttonText: {
      fontSize: 18,
      color: '#000',
      // Add fontFamily if needed
    },
  });