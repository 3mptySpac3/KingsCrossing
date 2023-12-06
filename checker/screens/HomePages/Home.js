import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import Slider from '@react-native-community/slider'
import { FontAwesome, Entypo } from '@expo/vector-icons';


// The 'setCurrentScreen' function should be passed from the parent component.
const Home = ({ setCurrentScreen }) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <ImageBackground source={require('../../components/images/Bot.jpeg')} style={styles.background}>

      <View style={styles.overlay}>
        <View style={styles.topBar}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => setShowVolumeSlider(!showVolumeSlider)}>
          <Entypo name="sound" size={24} color="white" />
        </TouchableHighlight>
        {showVolumeSlider && (
          <Slider
            style={styles.volumeSlider}
            value={volume}
            onValueChange={(val) => setVolume(val)}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        )}
      </View>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 20,
  },
  volumeSlider: {
    width: 150,
    marginLeft: 10,
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
    elevation: 5,
    border: 1 ,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    // Add fontFamily if needed
  },
});

export default Home;
