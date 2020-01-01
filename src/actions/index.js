import {ADD_TODO, DELETE_ALL, DELETE_TODO, TOGGLE_TODO} from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  id: Math.random().toString(),
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

export const deleteTodos = () => ({
  type: DELETE_ALL,
});
