import ActionTypes from './actionTypes';
import { Action } from 'redux';

export type TodoData = { text: string; completed: boolean; id: number };
type AddTodoAction = Action<ActionTypes.AddTodo>;
type DeleteTodoAction = Action<ActionTypes.DeleteTodo> & {
  payload: { position: number };
};
type ToggleCompletedAction = Action<ActionTypes.ToggleCompleted> & {
  payload: { position: number };
};
type TextChangedAction = Action<ActionTypes.TextChanged> & {
  payload: { position: number; text: string };
};
export const addTodo = (): AddTodoAction => ({ type: ActionTypes.AddTodo });
export const deleteTodo = (position: number): DeleteTodoAction => ({
  type: ActionTypes.DeleteTodo,
  payload: { position },
});
export const toggleCompleted = (position: number): ToggleCompletedAction => ({
  type: ActionTypes.ToggleCompleted,
  payload: { position },
});
export const textChanged = (
  position: number,
  text: string
): TextChangedAction => ({
  type: ActionTypes.TextChanged,
  payload: { position, text },
});
export type Actions =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleCompletedAction
  | TextChangedAction;
