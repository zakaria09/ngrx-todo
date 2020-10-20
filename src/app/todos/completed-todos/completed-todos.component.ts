import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Section } from 'src/app/Enums/Section.enum';

@Component({
  selector: 'completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {

  get todoSection() {
    return Section;
  }

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
