import { Modal, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import MainLogo from '../assets/images/MainLogo';
import CustomButton from './CustomButton';

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
          <CustomButton
            customStyle={styles.cancelButton}
            onPress={props.onClose}
          >
            Cancelar
          </CustomButton>
          <CustomButton customStyle={styles.button} onPress={addGoalHandler}>
            Añadir
          </CustomButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 6,
    width: '100%',
    padding: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  imageContainer: {
    marginBottom: 16,
    marginLeft: 16,
    // This to handle the offset of the image
  },
  button: {
    width: '40%',
  },
  cancelButton: {
    width: '40%',
    backgroundColor: 'indianred',
  },
});
export default GoalInput;
