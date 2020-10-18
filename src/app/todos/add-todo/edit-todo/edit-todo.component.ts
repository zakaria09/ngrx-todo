import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'edit-todos',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo$: Observable<{ todos: Array<any> }>;

  constructor(private readonly store: Store<{ todos }>) {
    this.todo$ = store.pipe(
      select('todos'),
      map((val: {todos: any}) => {
        const notEditable = val.todos.filter(t => t.editMode !== false);
        return { todos: notEditable };
      })
    );
  }

  ngOnInit() {
  }
}
