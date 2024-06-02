// app.tsx
import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStyle from './components/Todo.style';

const App = () => {
  const [todos, setTodos] = useState<{ id: number; description: string; completed: boolean }[]>([]);

  const addTodo = (description: string) => {
    setTodos([...todos, { id: Date.now(), description, completed: false }]);
  };

  const toggleCompleteTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={TodoStyle.container}>
      <SafeAreaView>
        <Text style={TodoStyle.headerText}>YAPILACAKLAR: {todos.length}</Text>
      </SafeAreaView>
      <TodoList todos={todos} onComplete={toggleCompleteTodo} onRemove={removeTodo} />
      <View style={TodoStyle.inputBottom}>
        <TodoInput onAddTodo={addTodo} />
      </View>
    </View>
  );
};

export default App;
