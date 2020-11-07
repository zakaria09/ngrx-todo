import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { toggleEdit, updateTodo } from 'src/app/todo.actions';

@Component({
  selector: 'edit-todos',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo$: Observable<{ todos: Array<any> }>;
  updatedValue: string = '';

  constructor(
    private readonly store: Store<{ todos }>
    ) {
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

  cancel(todo) {
    const { id, title, complete } = todo;
    this.store.dispatch(toggleEdit({ id, title, complete , editMode: false, pinned: false }))
  }

  onKey(event, todo) {
    const inputValue = event.target.value;
    this.updatedValue = inputValue;
    const { key } = event;
    if (key === 'Enter') {
      this.update(todo);
    }
  }

  update(todo) {
    if (this.updatedValue.trim() !== '') {
      const { id, complete } = todo;
      this.store.dispatch(updateTodo({ id, title: this.updatedValue, complete , editMode: false, pinned: false }));
    }
  }
}
