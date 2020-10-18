import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.reducer';

export const addTodo = createAction('[todo] Add Todo', props<Todo>());
export const toggleEdit = createAction('[todo] edit Todo', props<Todo>());
