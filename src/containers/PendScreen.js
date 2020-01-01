import React from 'react';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import Styles from '../../constants/Styles';
import {deleteTodo, toggleTodo} from '../actions';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import DeleteAll from './DeleteAll';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodos: id => dispatch(toggleTodo(id)),
  deleteTodos: id => dispatch(deleteTodo(id)),
});

const PendScreen = ({todos, toggleTodos, deleteTodos}) => {
  const total = Object.keys(todos).length;
  const pendingTotal = todos.filter(x => x.completed === false);
  const pending = todos.filter(x => x.completed === false).length;
  const percent = (pending / total).toFixed(2) * 100;
  return (
    <View style={Styles.container}>
      <Title
        title={
          total ? 'Pending - ' + percent.toString() + '%' : 'No Task Pending'
        }
      />
      <TodoList todo={pendingTotal} toggle={toggleTodos} delete={deleteTodos} />
      <DeleteAll />
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(PendScreen));
