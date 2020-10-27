import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-engage-dashboard',
  templateUrl: './admin-engage-dashboard.component.html',
  styleUrls: ['./admin-engage-dashboard.component.css']
})

export class AdminEngageDashboardComponent implements OnInit {
  isDark: boolean;
  timeFrame: number = 0;
  missionBar: number = 0;
  groupBar: number = 1;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
  }
}