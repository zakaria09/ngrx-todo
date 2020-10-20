import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, toggleCompletedTodo, toggleEdit } from 'src/app/todo.actions';
import { Todo } from '../../todo.reducer';
import { map } from 'rxjs/operators';
import { Section } from '../../Enums/Section.enum';

@Component({
  selector: 'display-todos',
  templateUrl: './display-todos.component.html',
  styleUrls: ['./display-todos.component.scss']
})
export class DisplayTodosComponent implements OnInit {

  get todoSection() {
    return Section;
  }

  todo$: Observable<{ todos: Array<any> }>;

  constructor(private readonly store: Store<{ todos }>) {
    this.todo$ = store.pipe(
        select('todos'),
        map((val: {todos: any}) => {
          const notEditable: Array<any> = val.todos.filter(t => t.editMode !== true);
          const notEditableAndInComplete = notEditable.filter(t => t.complete !== true);
          return { todos: notEditableAndInComplete };
        })
    );
  }

  ngOnInit() {
  }

  editMode(todo: Todo) {
    const { id, title, complete } = todo;
    this.store.dispatch(toggleEdit({ id, title, complete , editMode: true }));
  }
}
