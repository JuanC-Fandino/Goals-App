import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // We are using here the same name of the function in the parent component, and actually we are calling it here and passing the enteredGoalText as an argument
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="La meta que deseas alcanzar"
        onChangeText={goalInputHandler}
        // This is how we bind the value of the input to the state
        value={enteredGoalText}
      />
      <Button title="Agregar" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#abab00',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#abab00',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
