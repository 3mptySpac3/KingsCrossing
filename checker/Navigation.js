import React from 'react';
import Home from "./screens/HomePages/HomeManager";
import Settings from "./screens/Settings";
import Music from "./screens/Music";
import Scores from "./screens/Scores";
import MainGame from "./screens/MainGame";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight, SafeAreaView} from 'react-native';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,//Game header tue or false
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60,
        backgroundColor: '#ffffff',
    },
}
export default function Navigation(){
    return (
        <SafeAreaView style={styles.container}>
             <NavigationContainer>
                <Tab.Navigator screenOptions={screenOptions}>
                    <Tab.Screen
                    name="Home" 
                    component={Home}
                    options={
                        {
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: "center", justifyContent: "center"}}>
                                    <Entypo name="home" size={24} color={focused ? '#16247d' : '#111'} />
                                    <Text style={{fontSize: 12,padding: 2, color: "#16247d"}}>Home</Text>
                                </View>
                            )
                        }
                    
                    }
                     />
                    <Tab.Screen 
                    name="Settings" 
                    component={Settings}
                    options={
                        {
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: "center", justifyContent: "center"}}>
                                    <Entypo name="cog" size={24} color={focused ? '#16247d' : '#111'} />
                                    <Text style={{fontSize: 12, color: "#16247d"}}>Settings</Text>
                                </View>
                            )
                        }
                    }
                     />
                    <Tab.Screen 
                    name="Music" 
                    component={Music}
                    options={
                        {
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: "center", justifyContent: "center"}}>
                                    <Entypo name="beamed-note" size={24} color={focused ? '#16247d' : '#111'} />
                                    <Text style={{fontSize: 12, color: "#16247d"}}>MUSIC</Text>
                                </View>
                            )
                        }
                    
                    
                    
                    }
                     />
                    <Tab.Screen 
                    name="Scores" 
                    component={Scores}
                    options={
                        {
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: "center", justifyContent: "center"}}>
                                    <Entypo name="bookmarks" size={24} color={focused ? '#16247d' : '#111'} />
                                    <Text style={{fontSize: 12, color: "#16247d"}}>SCORES</Text>
                                </View>
                            )
                        }
                    
                    } 
                    />
                    <Tab.Screen 
                    name="MainGame" 
                    component={MainGame}
                    options={
                        {
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: "center", justifyContent: "center"}}>
                                    <Entypo name="controller-play" size={24} color={focused ? '#16247d' : '#111'} />
                                    <Text style={{fontSize: 12, color: "#16247d"}}>Continue</Text>
                                </View>
                            )
                        }
                    }
                     />
                </Tab.Navigator>
            </NavigationContainer>               

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 400,
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
});