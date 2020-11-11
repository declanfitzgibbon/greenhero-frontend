import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TemperatureService } from 'src/app/services/temperature.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-admin-temp',
  templateUrl: './admin-temp-feed.component.html',
  styleUrls: ['./admin-temp-feed.component.css'],
})

export class AdminTempFeedComponent implements OnInit {
    loading: boolean;
    temp: {
      title: string;
      value: number;
      state: string;
    };
    desiredTemp: number;
  
  constructor(private themeService: ThemeService, private tempService: TemperatureService) {
  }

  async ngOnInit() {
    this.loading = true;
    this.temp = {
      title: 'Current Temperature',
      value: (await this.tempService.getLatestTemperature()).temperature,
      state: (await this.tempService.getLatestACState()).state ? 'AC is on' : 'AC is off' 
    }
    this.desiredTemp = (await this.tempService.getDesiredTemp()).temperatureDesired
    this.loading = false;
  }

  async saveTemp() {
    await this.tempService.saveDesiredTemp(this.desiredTemp);
    this.ngOnInit();
  }
}
