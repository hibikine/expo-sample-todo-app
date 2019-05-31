import { combineReducers } from 'redux';
import todo, { State as TodoState } from './todo';

export type State = { todo: TodoState };
const rootReducer = combineReducers({ todo });
export default rootReducer;
