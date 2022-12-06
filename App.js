import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Every view organizes its children into a column by default (Flexbox)
// Child elements are organized
// JustifyContent: aligns children in the main axis
// The style doesn't cascade down to the children

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalHandler() {
    setCourseGoals([...courseGoals, enteredGoalText]);
  }

  function changeTextHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="La meta que deseas alcanzar"
          onChangeText={changeTextHandler}
        />
        <Button title="Agregar" onPress={goalHandler} />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          {courseGoals.length !== 0 &&
            courseGoals.map((goal) => (
              <View style={styles.goalItem}>
                <Text style={styles.goalText} key={goal}>
                  {goal}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    height: '100%',
  },
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
  listContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#abab00',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});
