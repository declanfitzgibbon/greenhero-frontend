import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-admin-temp',
  templateUrl: './admin-temp-feed.component.html',
  styleUrls: ['./admin-temp-feed.component.css'],
})

export class AdminTempFeedComponent implements OnInit {
    currentTemp: Array<{
      title: string;
      value: number;
      state: string;
    }>;
  
  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.currentTemp = [
      {
      title: 'Current Temperature',
      value: 22,
      state: 'A/C is on'
      }
    ]
  }
}
