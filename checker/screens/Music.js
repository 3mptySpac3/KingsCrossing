import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

export default function App() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(true); // Set to true to play automatically
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  async function loadSound() {
    const { sound, status } = await Audio.Sound.createAsync(
      require('../assets/Jack_Harlow_LOM.mp3'),
      { shouldPlay: true, isLooping: true } // Set shouldPlay and isLooping to true
    );
    setSound(sound);
    setDuration(status.durationMillis);
  }

  useEffect(() => {
    loadSound();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  const playPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const seekAudio = async (value) => {
    if (sound) {
      await sound.setPositionAsync(Math.floor(value));
      setPosition(value);
    }
  };

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          if (status.didJustFinish && !status.isLooping) {
            setIsPlaying(false);
          }
        }
      });
    }
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title={isPlaying ? "Pause" : "Play"} onPress={playPause} />
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={seekAudio}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text>Remaining Time: {(duration - position) / 1000} seconds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
