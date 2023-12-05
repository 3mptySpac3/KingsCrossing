import react from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';

export default function Music(){
    return (
        <View style={styles.container}>
            <Text>Music</Text>
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