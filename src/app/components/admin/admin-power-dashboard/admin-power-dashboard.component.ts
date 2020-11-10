import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-admin-power-dashboard',
  templateUrl: './admin-power-dashboard.component.html',
  styleUrls: ['./admin-power-dashboard.component.css']
})

export class AdminPowerDashboardComponent implements OnInit {
  
  isDark: boolean;
  timeFrame: number = 0;
  usePie: number = 1;
  professionPie: number = 2;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
  }
}