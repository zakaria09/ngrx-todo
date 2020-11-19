import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  itemsCurrenlyDraggable: boolean;
  minimumTodos: number = 1;

  get currentLimit(): Observable<number> {
    return this.settingService.limit$;
  }

  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit() {
    this.settingService.itemsDraggable
      .subscribe(isDraggable => this.itemsCurrenlyDraggable = isDraggable)
    this.settingService.getOutStandingTodos()
      .subscribe(outstanding => {
        if(outstanding > 0) {
          this.minimumTodos = outstanding
        }
      })
  }

  toggleItemsReOrdering() {
    const toggleDraggable = !this.itemsCurrenlyDraggable
    this.settingService.makeItemsDraggable(toggleDraggable);
  }

  valueChanged(setLimit) {
    const limit = Number(setLimit);
    this.settingService.changeLimit(limit);
}
}
