import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';

export interface Todo {
  id: number,
  title: string,
  complete: boolean,
  editMode: boolean
}

export interface State {
  todos: Array<Todo>
}

export const initialState = { todos: []};

const _todoReducer = createReducer(
  initialState,
  on(todoActions.addTodo , (state: State, { id, title, complete, editMode } ) => {
    return { ...state, todos: [ ...state.todos, { id, title, complete, editMode } ] }
  }),
  on(todoActions.toggleEdit, (state: State, { id, title, complete, editMode  } ) => {
    const toggleEdit = state.todos.filter(todo => todo.id !== id);
    console.log('toggleEdit', toggleEdit)
    return { ...state, todos: [ ...toggleEdit, { id, title, complete, editMode } ] }
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
