import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedTodosComponent implements OnInit {

  todo$: Observable<{ todos: Array<any> }>;

  constructor(private readonly store: Store<{ todos }>) {
    this.todo$ = store.pipe(
      select('todos'),
      map((val: {todos: any}) => {
        const completedTodos = val.todos.filter(t => t.complete);
        return { todos: completedTodos };
      })
  );
  }

  ngOnInit(): void {
  }

}
