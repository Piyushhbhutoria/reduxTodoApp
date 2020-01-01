import React from 'react';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import Styles from '../../constants/Styles';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';
import AddTodo from './AddTodo';
import DeleteAll from './DeleteAll';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodos: id => dispatch(toggleTodo(id)),
});

const AllScreen = ({todos, toggleTodos}) => {
  const total = Object.keys(todos).length;
  const pending = todos.filter(x => x.completed === false).length;
  const completed = todos.filter(x => x.completed === true).length;
  const percentp = (pending / total).toFixed(2) * 100;
  const percentc = (completed / total).toFixed(2) * 100;
  console.log('allscreen', todos);
  return (
    <View style={Styles.container}>
      <AddTodo />
      {!total ? (
        <Title title={'Add a Task'} />
      ) : (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Title title={'Pending - ' + percentp.toString() + '%'} />
          <Title title={'Completed - ' + percentc.toString() + '%'} />
        </View>
      )}
      <TodoList todo={todos} action={toggleTodos} />
      <DeleteAll />
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(AllScreen));
