import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';

export default function Scores(){
    return (
        <View style={styles.container}>
            <Text>Scores</Text>
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