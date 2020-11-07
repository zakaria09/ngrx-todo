import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo, toggleCompletedTodo } from 'src/app/todo.actions';
import { Todo } from '../../todo.reducer';
import { togglePinnedTodo } from '../../todo.actions';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  changeCompletion(todo, isCompleted: boolean) {
    const { id, title, editMode } = todo;
    this.store.dispatch(toggleCompletedTodo({ id, title, complete: isCompleted , editMode, pinned: false }));
  }

  togglePinned(todo, isPinned) {
    const { id, title, editMode, complete } = todo;
    this.store.dispatch(togglePinnedTodo({ id, title, complete , editMode, pinned: isPinned }));
  }

  removeTodo(todoId) {
    this.store.dispatch(deleteTodo({ id: todoId }));
  }
}
