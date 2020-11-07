import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, toggleCompletedTodo, toggleEdit } from 'src/app/todo.actions';
import { Todo } from '../../todo.reducer';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'display-todos',
  templateUrl: './display-todos.component.html',
  styleUrls: ['./display-todos.component.scss']
})
export class DisplayTodosComponent implements OnInit {

  itemsCurrenlyDraggable: boolean;

  todo$: Observable<{ todos: Array<any> }>;

  constructor(
    private readonly store: Store<{ todos }>,
    private settingService: SettingService
    ) {}

  ngOnInit() {
    this.todo$ = this.settingService.listenToReOrderingOfTodos();
    this.settingService.itemsDraggable
      .subscribe(isDraggable => this.itemsCurrenlyDraggable = isDraggable)
  }

  editMode(todo: Todo) {
    const { id, title, complete } = todo;
    this.store.dispatch(toggleEdit({ id, title, complete , editMode: true, pinned: false }));
  }

  dragAndDrop(event) {
    this.settingService.drop(event);
  }
}
