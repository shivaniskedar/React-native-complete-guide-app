import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

    const [courseGoal, setCourseGoal] = useState([]);


    const addGoal = goalTitle => {
        setCourseGoal(currentGoal => [...currentGoal, {id: Math.random().toString(),value:goalTitle}]);
    };

    return (
        <View style={styles.root}>
            <GoalInput onAddGoal = {addGoal}/>

            <FlatList
                keyExtractor={(item,index) => item.id}
                data={courseGoal}
                      renderItem={itemData => <GoalItem title={itemData.item.value}
                      />}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    root: {
        padding: 50
    }
});
