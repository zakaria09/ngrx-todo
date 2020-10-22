import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  itemsCurrenlyDraggable: boolean;

  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit() {
    this.settingService.itemsDraggable
      .subscribe(isDraggable => this.itemsCurrenlyDraggable = isDraggable)
  }

  toggleItemsReOrdering() {
    const toggleDraggable = !this.itemsCurrenlyDraggable
    this.settingService.makeItemsDraggable(toggleDraggable);
  }
}
