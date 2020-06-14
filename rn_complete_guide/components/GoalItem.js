import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    }
});

export default GoalItem;