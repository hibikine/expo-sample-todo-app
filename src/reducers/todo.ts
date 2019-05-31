import ActionTypes from '../actionTypes';
import { Actions, TodoData } from '../actions';
import { produce } from 'immer';
export type State = { readonly todos: TodoData[]; readonly currentId: number };
const initialState = { todos: [], currentId: 0 };
const reducer = (state: State = initialState, action: Actions) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.AddTodo:
        draft.todos.push({ text: '', completed: false, id: draft.currentId });
        draft.currentId++;
        break;
      case ActionTypes.DeleteTodo:
        draft.todos.splice(action.payload.position, 1);
        break;
      case ActionTypes.ToggleCompleted:
        draft.todos[action.payload.position].completed = !draft.todos[
          action.payload.position
        ].completed;
        break;
      case ActionTypes.TextChanged:
        draft.todos[action.payload.position].text = action.payload.text;
        break;
    }
  });
export default reducer;
