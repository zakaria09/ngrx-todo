import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { togglePinnedTodo } from 'src/app/todo.actions';
import { Todo } from '../../todo.reducer';

@Component({
  selector: 'pinned-todos',
  templateUrl: './pinned-todos.component.html',
  styleUrls: ['./pinned-todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PinnedTodosComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private readonly store: Store<{ todos }>
  ) { }

  ngOnInit() {
    this.todos$ = this.store.pipe(
      select('todos'),
      pluck('todos'),
      map((todos: Array<any>) => todos.filter(todo => todo.pinned))
    )
  }

  togglePinned(todo, isPinned) {
    const { id, title, editMode, complete } = todo;
    this.store.dispatch(togglePinnedTodo({ id, title, complete , editMode, pinned: isPinned }));
  }
}
