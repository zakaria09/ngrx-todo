import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, props } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { addTodo } from '../../todo.actions';
import { Todo } from '../../todo.reducer';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoForm: FormGroup;

  outstanding: number;
  limit: number;

  get isLimitReached(): boolean {
    return this.outstanding >= this.limit;
  };

  constructor(
    private store: Store<{ todo }>,
    private settingService: SettingService
    ) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required)
    });
    const outstanding$ = this.settingService.getOutStandingTodos();
    const { limit$ } = this.settingService;
    combineLatest([outstanding$, limit$])
      .subscribe((values: Array<number>) => {
        this.outstanding = values[0];
        this.limit = values[1];
        this.settingService.limitHasBeenReached(this.isLimitReached);
    })
  }

  addTodo() {
    if (this.todoForm.valid) {
      const { title } =  this.todoForm.value
      const todo: Todo = { id: new Date().getTime(), title, complete: false, editMode: false, pinned: false }
      this.store.dispatch(addTodo({...todo}));
      this.todoForm.reset();
    }
  }

}
