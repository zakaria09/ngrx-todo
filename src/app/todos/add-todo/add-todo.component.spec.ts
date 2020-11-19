/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddTodoComponent } from './add-todo.component';
import { ActionsSubject, StateObservable, Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        ReactiveFormsModule
      ],
      declarations: [ AddTodoComponent ],
      providers: [
        Store,
        StateObservable,
        ActionsSubject,
       ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AddTodoComponent);
      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call the addTodo method only once upon when Add Todo button is clicked', () => {
    fixture.detectChanges();
    spyOn(component, 'addTodo');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addTodo).toHaveBeenCalledTimes(1);
  });
});
