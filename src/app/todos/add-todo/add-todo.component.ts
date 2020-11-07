import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo } from '../../todo.actions';
import { Todo } from '../../todo.reducer';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private store: Store<{ todo }>) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required)
    });
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
