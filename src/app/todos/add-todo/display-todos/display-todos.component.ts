import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleEdit } from 'src/app/todo.actions';
import { Todo } from '../../../todo.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'display-todos',
  templateUrl: './display-todos.component.html',
  styleUrls: ['./display-todos.component.scss']
})
export class DisplayTodosComponent implements OnInit {

  todo$: Observable<{ todos: Array<any> }>;

  constructor(private readonly store: Store<{ todos }>) {
    this.todo$ = store.pipe(
        select('todos'),
        map((val: {todos: any}) => {
          const notEditable = val.todos.filter(t => t.editMode !== true);
          console.log(notEditable)
          return { todos: notEditable };
        })
    );
  }

  ngOnInit() {
  }

  edit(todo: Todo) {
    console.log('edit', todo);
    const { id, title, complete } = todo;
    this.store.dispatch(toggleEdit({ id, title, complete , editMode: true }))
  }
}
