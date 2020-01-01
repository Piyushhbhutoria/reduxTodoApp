import React from 'react';
import {View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import Styles from '../../constants/Styles';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';
import DeleteAll from './DeleteAll';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodos: id => dispatch(toggleTodo(id)),
});

const CompScreen = ({todos, toggleTodos}) => {
  const total = Object.keys(todos).length;
  const completetotal = todos.filter(x => x.completed === true);
  const completed = todos.filter(x => x.completed === true).length;
  const percent = (completed / total).toFixed(2) * 100;
  console.log(completetotal);

  return (
    <View style={Styles.container}>
      <Title
        title={
          total
            ? 'Completed - ' + percent.toString() + '%'
            : 'No Task to Complete'
        }
      />
      <TodoList todo={completetotal} action={toggleTodos} />
      <DeleteAll />
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(CompScreen));
