import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingService implements OnInit {

  todosOrder: Array<any>;
  itemsDraggable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  limit$: BehaviorSubject<number> = new BehaviorSubject<number>(3);

  constructor(private readonly store: Store<{ todos }>) { }

  ngOnInit() {}

  makeItemsDraggable(isDraggable: boolean) {
    this.itemsDraggable.next(isDraggable);
  }

  changeLimit(newLimit: number) {
    this.limit$.next(newLimit);
  }

  getOutStandingTodos(): Observable<number> {
    return this.store.pipe(
      select('todos'),
      pluck('todos'),
      map((todos: Array<any>) => {
        const incomplete: Array<any> = todos.filter(t => t.complete !== true);
        return incomplete.length;
      })
      )
  }

  getInProgressTodos() {
    return this.store.pipe(
      select('todos'),
      pluck('todos'),
      map((todos: Array<any>) => {
        const notEditable: Array<any> = todos.filter(t => t.editMode !== true);
        const notPinned: Array<any> = notEditable.filter(t => t.pinned !== true);
        const notEditableAndInComplete = notPinned.filter(t => t.complete !== true);
        return { todos: notEditableAndInComplete };
      })
    );
  }

  listenToReOrderingOfTodos() {
    return this.getInProgressTodos()
      .pipe(
        pluck('todos'),
        map(todos => {
          this.todosOrder = todos;
          return { todos: this.todosOrder };
        })
      );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todosOrder, event.previousIndex, event.currentIndex);
  }

}
