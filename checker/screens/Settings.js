import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default function Settings() {
    return (
        <ImageBackground source={require('../components/images/Bot.jpeg')} style={styles.background}>
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>General</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Theme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Change Player Colour</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Change Board</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Sound Effects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Language</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 110,

    },
    header: {
        backgroundColor: '#FFC107',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
        margin: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
    },
    menuContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        backgroundColor: '#FFC107', // Gold color for buttons
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        width: '80%',// Set width as desired
    },
    menuText: {
        color: '#000', // Text color
        textAlign: 'center',
        fontSize: 18,
    },
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      },
});
