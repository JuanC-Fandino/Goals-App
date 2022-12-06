import { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import React from 'react';
import CustomButton from './components/CustomButton';
import { StatusBar } from 'expo-status-bar';

// Every view organizes its children into a column by default (Flexbox)
// JustifyContent: aligns children in the main axis
// The style doesn't cascade down to the children
// Scroll view renders all of its children, even if they're not visible
// FlatList can render primitive data types but also objects, if we pass an object with a key property to the data prop it will use that key to render the list or we can pass a function to the keyExtractor prop

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  function renderItem(itemData) {
    return <GoalItem item={itemData.item} onPressHandler={removeGoalHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.appContainer}>
        <CustomButton onPress={startAddGoalHandler}>
          Añadir nueva meta
        </CustomButton>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onClose={endAddGoalHandler}
        />
        <View
          style={{
            borderBottomColor: 'orange',
            marginTop: 16,
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: '90%',
            alignSelf: 'center',
          }}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={courseGoals}
            renderItem={renderItem}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </SafeAreaView>
    </>
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
