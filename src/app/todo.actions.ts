import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.reducer';

export const addTodo = createAction('[todo] Add Todo', props<Todo>());
export const toggleEdit = createAction('[todo] edit Todo', props<Todo>());
export const updateTodo = createAction('[todo] update Todo', props<Todo>());
export const toggleCompletedTodo = createAction('[todo] update Todo', props<Todo>());
export const togglePinnedTodo = createAction('[todo] pin Todo', props<Todo>());
export const deleteTodo = createAction('[todo] delete Todo', props<{ id }>());
