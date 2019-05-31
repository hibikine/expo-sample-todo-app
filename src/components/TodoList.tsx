import * as React from 'react';
import TodoItem from './TodoItem';
import { List } from 'native-base';
import { State } from '../reducers';
import { TodoData, toggleCompleted, textChanged } from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const TodoList = ({
  todos,
  toggleCompleted,
  textChanged,
}: {
  todos: TodoData[];
  toggleCompleted: (id: number) => () => void;
  textChanged: (id: number) => (text: string) => void;
}) => (
  <List>
    {todos.map((todo, i) => (
      <TodoItem
        item={todo}
        key={todo.id}
        toggleCompleted={toggleCompleted(i)}
        textChanged={textChanged(i)}
      />
    ))}
  </List>
);
const mapStateToProps = (state: State) => ({ todos: state.todo.todos });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCompleted: (id: number) => () => dispatch(toggleCompleted(id)),
  textChanged: (id: number) => (text: string) =>
    dispatch(textChanged(id, text)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
