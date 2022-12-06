import { Text, View, StyleSheet, Pressable } from 'react-native';
import React from 'react';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'darkorange' }}
        onPress={props.onPressHandler.bind(this, props.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'orange',
    width: '90%',
    alignSelf: 'center',
  },
  goalText: {
    color: 'white',
    padding: 8,
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
