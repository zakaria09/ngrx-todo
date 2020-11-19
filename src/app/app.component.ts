import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLimitReached: boolean;

  constructor(private settingService: SettingService) {}

  ngOnInit() {
    this.settingService.isLimitReached$
      .subscribe(isReached => this.isLimitReached = isReached);
  }

}
