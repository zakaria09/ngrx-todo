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
import { SettingsComponent } from './settings/settings/settings.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CompletedTodosComponent } from './todos/completed-todos/completed-todos.component';
import { ActionButtonsComponent } from './todos/action-buttons/action-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    DisplayTodosComponent,
    EditTodoComponent,
    CompletedTodosComponent,
    ActionButtonsComponent,
    SettingsComponent
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
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
