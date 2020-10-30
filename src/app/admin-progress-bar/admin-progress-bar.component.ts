import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-progress-bar',
  templateUrl: './admin-progress-bar.component.html',
  styleUrls: ['./admin-progress-bar.component.css']
})

export class AdminProgressBarComponent implements OnInit, OnChanges {
  isDark: boolean;
  @Input() title: string;
  @Input() isFull: boolean = false;
  @Input() bar_select: number;

  view: Array<number>;
  value: number;
  loading: boolean;

  // options
  colorScheme: { domain: Array<string> };

  constructor(private themeService: ThemeService) {
    
  }

  ngOnInit() {
    this.loading = true;

    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }
    
    switch(this.bar_select){
      case 1:
        this.title = "Month Allowance";
        this.value = 40;
        break;
      case 2:
        this.title = "Week Allowance";
        this.value = 50;
        break;
      case 3:
        this.title = "People has completed missions";
        this.value = 80;
        break;
      case 4:
        this.title = "People has formed a group";
        this.value = 20;
        break;
      case 5:
        this.title = "Group has completed events";
        this.value = 90;
        break;
    }

    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onResize(event) {
    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];
  }
}