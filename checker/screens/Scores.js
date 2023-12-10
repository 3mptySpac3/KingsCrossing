import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const scoresData = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    user: `User ${index + 1}`,
    score: Math.floor(Math.random() * 100) // Random score for illustration
}));

export default function Scores() {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.score}>{item.score}</Text>
        </View>
    );

    return (
        <FlatList
            data={scoresData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%'
    },
    user: {
        fontSize: 18,
        color: '#333'
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    }
});
