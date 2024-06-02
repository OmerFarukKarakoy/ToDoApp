import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const TodoItem = ({ todo, onComplete, onRemove }) => {
  return (
    <TouchableOpacity
      style={[styles.todoItem, todo.completed && styles.completed]}
      onPress={onComplete}
      onLongPress={onRemove}
    >
      <View style={styles.box}>
        <Text style={[styles.todoText, todo.completed && styles.completedText]}>{todo.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    margin: 10,
  },
  box: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'green',
    borderWidth: 1,
  },
  todoText: {
    fontSize: 16,
    color:'white',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  completed: {
    opacity: 0.5,
  },
});

export default TodoItem;
