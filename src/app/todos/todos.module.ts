import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TodosComponent } from './todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { DisplayTodosComponent } from './display-todos/display-todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { PinnedTodosComponent } from './pinned-todos/pinned-todos.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule
  ],
  exports: [
    TodosComponent
  ],
  declarations: [
    TodosComponent,
    AddTodoComponent,
    CompletedTodosComponent,
    DisplayTodosComponent,
    EditTodoComponent,
    PinnedTodosComponent,
    ActionButtonsComponent
  ]
})
export class TodosModule { }
