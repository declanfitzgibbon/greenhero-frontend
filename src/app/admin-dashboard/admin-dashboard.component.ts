import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  isDark: boolean;
  timeFrame: number = 0;
  value_card_consumption: Array<{ name: string, value: number }>;
  value_card_mission: Array<{ name: string, value: number }>;
  value_pie_consumption: any[];
  value_pie_mission: any[];


  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
  }

}
