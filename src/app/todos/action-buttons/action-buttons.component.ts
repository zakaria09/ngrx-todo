import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo, toggleCompletedTodo } from 'src/app/todo.actions';
import { Todo } from '../../todo.reducer';
import { Section } from '../../Enums/Section.enum';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  get sections() {
    return Section;
  }

  @Input() todo: Todo;
  @Input() section;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  changeCompletion(todo, isCompleted: boolean) {
    const { id, title, editMode } = todo;
    this.store.dispatch(toggleCompletedTodo({ id, title, complete: isCompleted , editMode }));
  }

  removeTodo(todoId) {
    this.store.dispatch(deleteTodo({ id: todoId }));
  }
}
