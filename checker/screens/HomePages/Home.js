import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// The 'setCurrentScreen' function should be passed from the parent component.
const Home = ({ setCurrentScreen }) => {

  return (
    <ImageBackground source={require('../../components/images/Bot.jpeg')} style={styles.background}>
      <View style={styles.overlay}>

        <TouchableHighlight
          style={styles.buttonHome}
          onPress={() => setCurrentScreen('Home')}>
          <FontAwesome name="home" size={24} color="black" />  
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => setCurrentScreen('SPO')}>
          <Text style={styles.buttonText}>Single Player</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.button}
          onPress={() => setCurrentScreen('MPO')}>
          <Text style={styles.buttonText}>Multi Player offline</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => setCurrentScreen('MPOO')}>
          <Text style={styles.buttonText}>Multi Player Online</Text>
        </TouchableHighlight>

      </View>
    </ImageBackground>
  );
};

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

export default Home;
