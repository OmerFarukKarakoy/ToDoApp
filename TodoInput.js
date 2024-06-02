import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TodoInput = ({ onAddTodo }) => {
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (description.trim()) {
      onAddTodo(description);
      setDescription('');
    } else {
      alert('Boş bir görev eklenemez!');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..." 
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#AAB7B8',
    borderWidth: 1,
    borderColor: '#f5c6cb',
    borderRadius: 15,
    marginBottom: 35,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomColor: '#ccc',
  },
  input: {
    fontSize:17,
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 4,
    
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center', 
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoInput;
