import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleEdit, togglePinnedTodo } from 'src/app/todo.actions';
import { Todo } from '../../todo.reducer';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'display-todos',
  templateUrl: './display-todos.component.html',
  styleUrls: ['./display-todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayTodosComponent implements OnInit {

  itemsCurrenlyDraggable: Observable<any>;

  todo$: Observable<{ todos: Array<any> }>;

  constructor(
    private readonly store: Store<{ todos }>,
    private settingService: SettingService
    ) {}

  ngOnInit() {
    this.todo$ = this.settingService.listenToReOrderingOfTodos();
    this.itemsCurrenlyDraggable = this.settingService.isItemsDraggable;
  }

  editMode(todo: Todo) {
    const { id, title, complete } = todo;
    this.store.dispatch(toggleEdit({ id, title, complete , editMode: true, pinned: false }));
  }

  dragAndDrop(event) {
    this.settingService.drop(event);
  }

  togglePinned(todo, isPinned) {
    const { id, title, editMode, complete } = todo;
    this.store.dispatch(togglePinnedTodo({ id, title, complete , editMode, pinned: isPinned }));
  }
}
