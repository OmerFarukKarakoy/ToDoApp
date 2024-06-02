// TodoList.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onComplete, onRemove }) => {
  const renderItem = ({ item }) => (
    <TodoItem
      todo={item}
      onComplete={() => onComplete(item.id)}
      onRemove={() => onRemove(item.id)}
    />
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
