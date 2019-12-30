import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AddTodo from './containers/AddTodo';
import Visibletodos from './containers/Visibletodos';

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <Visibletodos />
        </View>
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
