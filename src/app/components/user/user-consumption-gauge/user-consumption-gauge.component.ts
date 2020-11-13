import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-user-consumption-gauge',
  templateUrl: './user-consumption-gauge.component.html',
  styleUrls: ['./user-consumption-gauge.component.css']
})

export class UserGaugeChartComponent implements OnInit, OnChanges {
  isDark: boolean;
  @Input() title: string;
  @Input() isFull: boolean = false;
  @Input() value: number;
  @Input() max: number;
  @Input() stats: boolean = false;

  view: Array<number>;
  loading: boolean;
  single: any[];
  legend: boolean = false;
  units: string;

  // options
  colorScheme: { domain: Array<string> };

  constructor(private themeService: ThemeService) {

  }

  ngOnInit() {
    this.loading = true;

    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : innerWidth / 2) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - 40)) : innerHeight / 2];

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    this.title = "Month allowance"

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    this.units = 'Max: '+(this.max);
    if (!this.stats) {
      this.single = [
        {
          "name": "Month Allowance",
          "value": this.value
        }
      ]
      this.units += '\nNot Connected!';
    }
    else {
      this.single = [
        {
          "name": "Month Allowance",
          "value": this.value
        }
      ]
      this.units += '\nConnected!';
    }

    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onResize(event) {
    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : innerWidth / 2) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - 40)) : innerHeight / 2];
  }
}