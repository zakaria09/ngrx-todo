import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  isLimitReached: boolean;

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.isLimitReached$
      .subscribe(isReached => this.isLimitReached = isReached);
  }

}
