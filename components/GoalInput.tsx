import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import MainLogo from '../assets/images/MainLogo';

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
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <MainLogo width="100" height="100" fill="orange" />
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Agrega tu meta aquí"
          onChangeText={goalInputHandler}
          // This is how we bind the value of the input to the state
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Agregar" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancelar" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageContainer: {
    marginBottom: 16,
  },
});
export default GoalInput;
