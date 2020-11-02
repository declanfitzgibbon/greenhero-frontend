import { Component, Input, OnInit} from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  isDark: boolean;
  timeFrame: number = 0;
  power_month: number = 1;
  power_week: number = 2;
  engage_mission: number = 3;
  engage_group: number = 4;
  engage_event: number = 5;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
  }

}
