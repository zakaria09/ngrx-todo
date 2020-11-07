import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';

export interface Todo {
  id: number,
  title: string,
  complete: boolean,
  editMode: boolean,
  pinned: boolean
}

export interface State {
  todos: Array<Todo>
}

export const initialState = { todos: []};

const _todoReducer = createReducer(
  initialState,
  on(todoActions.addTodo , (state: State, { id, title, complete, editMode, pinned } ) => {
    return { ...state, todos: [ ...state.todos, { id, title, complete, editMode, pinned } ] }
  }),
  on(todoActions.toggleEdit, (state: State, { id, title, complete, editMode, pinned  } ) => {
    const toggleEdit = state.todos.filter(todo => todo.id !== id);
    return { ...state, todos: [ ...toggleEdit, { id, title, complete, editMode, pinned } ] }
  }),
  on(todoActions.toggleEdit, (state: State, { id, title, complete, editMode, pinned  } ) => {
    const toggleEdit = state.todos.filter(todo => todo.id !== id);
    return { ...state, todos: [ ...toggleEdit, { id, title, complete, editMode, pinned } ] }
  }),
  on(todoActions.updateTodo, (state: State, { id, title, complete, editMode, pinned  } ) => {
    const removeOldTodo = state.todos.filter(todo => todo.id !== id);
    const updatedTodo = { id, title, complete, editMode, pinned };
    return { ...state, todos: [ ...removeOldTodo, updatedTodo ] }
  }),
  on(todoActions.toggleCompletedTodo, (state: State, { id, title, complete, editMode, pinned  } ) => {
    const toggleEdit = state.todos.filter(todo => todo.id !== id);
    return { ...state, todos: [ ...toggleEdit, { id, title, complete, editMode, pinned } ] }
  }),
  on(todoActions.togglePinnedTodo, (state: State, { id, title, complete, editMode, pinned  } ) => {
    const togglePinned = state.todos.filter(todo => todo.id !== id);
    return { ...state, todos: [ ...togglePinned, { id, title, complete, editMode, pinned } ] }
  }),
  on(todoActions.deleteTodo, (state: State, { id } ) => {
    const removeDeletedTodo = state.todos.filter(todo => todo.id !== id);
    return { ...state, todos: [ ...removeDeletedTodo ] }
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
