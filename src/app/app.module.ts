import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { DisplayTodosComponent } from './todos/display-todos/display-todos.component';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CompletedTodosComponent } from './todos/completed-todos/completed-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    DisplayTodosComponent,
    EditTodoComponent,
    CompletedTodosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      name: 'todos',
      maxAge: 25, // Retains last 25 states
    }),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
