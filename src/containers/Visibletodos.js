import {} from 'react-native';
import {connect} from 'react-redux';
import {toggleTodo} from './../actions';
import TodoList from './../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  toggleTodos: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
