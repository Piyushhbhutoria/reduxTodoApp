import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const TodoList = ({todos, toggleTodos}) => {
  return (
    <View style={{padding: 20}}>
      {todos.map(todo => (
        <TouchableOpacity key={todo.id} onPress={() => toggleTodos(todo.id)}>
          <Text
            style={{
              fontFamily: 'Caveat Brush',
              fontSize: 24,
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}>
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TodoList;
