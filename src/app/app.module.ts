import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SettingsComponent } from './settings/settings/settings.component';
import { TodosModule } from './todos/todos.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoselectDirective } from './directives/autoselect.directive';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AutoselectDirective
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
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
