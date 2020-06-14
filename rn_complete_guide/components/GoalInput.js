import React , {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const Goalnput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    function getGoalSet(enteredText) {
        setEnteredGoal(enteredText);
    }

    return(
        <View style={styles.inputView}>
            <TextInput placeholder="Course Goal"
                       style={styles.inputContainer}
                       onChangeText={getGoalSet}
                       value={enteredGoal}/>
            <Button title="Add" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    inputContainer: {
        width: '80%', borderColor: 'black', borderWidth: 1, padding: 5
    },
});

export default Goalnput;