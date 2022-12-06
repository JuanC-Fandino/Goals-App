import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Every view organizes its children into a column by default (Flexbox)
// JustifyContent: aligns children in the main axis
// The style doesn't cascade down to the children
// Scroll view renders all of its children, even if they're not visible
// FlatList can render primitive data types but also objects, if we pass an object with a key property to the data prop it will use that key to render the list or we can pass a function to the keyExtractor prop

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function renderItem(itemData) {
    return <GoalItem text={itemData.item.text} />;
  }

  return (
    <View style={styles.appContainer}>
    <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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

  listContainer: {
    flex: 5,
  },

});
