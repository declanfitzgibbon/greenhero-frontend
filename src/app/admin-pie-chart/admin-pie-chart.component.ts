import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-pie-chart',
  templateUrl: './admin-pie-chart.component.html',
  styleUrls: ['./admin-pie-chart.component.css']
})
export class AdminPieChartComponent implements OnInit, OnChanges {

  isDark: boolean;
  @Input() title: string = 'User engagement';
  @Input() isFull: boolean = false;
  @Input() timeFrame: number = 0;

  single: any[];
  view: Array<number>;

  loading: boolean;

  // options
  labels: boolean = true;
  legend: boolean = true;
  trimLabels: boolean = false;

  colorScheme: { domain: Array<string> };

  constructor(private themeService: ThemeService) {
    
  }

  ngOnInit() {
    this.loading = true;

    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];
    

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    this.legend = !(innerWidth < 960);
    
    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    switch (this.timeFrame) {
      case 0:
        this.single = [
          {
            name: 'Spent coins',
            label: 'Spent coins',
            value: 200
          },
          {
            name: 'Mission coins',
            label: 'Mission coins',
            value: 100
          },
          {
            name: 'Earned coins',
            label: 'Earned coins',
            value: 100
          },
          {
            name: 'Coin balance',
            label: 'Coin balance',
            value: 500
          }
        ];
        break;
      
      case 1:
        this.single = [
          {
            name: 'Spent coins',
            label: 'Spent coins',
            value: 100
          },
          {
            name: 'Mission coins',
            label: 'Mission coins',
            value: 100
          },
          {
            name: 'Earned coins',
            label: 'Earned coins',
            value: 600
          },
          {
            name: 'Coin balance',
            label: 'Coin balance',
            value: 700
          }
        ];
        
        break;
      
      case 2:
        this.single = [
          {
            name: 'Spent coins',
            label: 'Spent coins',
            value: 1100
          },
          {
            name: 'Mission coins',
            label: 'Mission coins',
            value: 700
          },
          {
            name: 'Earned coins',
            label: 'Earned coins',
            value: 500
          },
          {
            name: 'Coin balance',
            label: 'Coin balance',
            value: 900
          }
        ];
        break;
      
        case 3:

          this.single = [
            {
              name: 'Spent coins',
              label: 'Spent coins',
              value: 1400
            },
            {
              name: 'Mission coins',
              label: 'Mission coins',
              value: 400
            },
            {
              name: 'Earned coins',
              label: 'Earned coins',
              value: 800
            },
            {
              name: 'Coin balance',
              label: 'Coin balance',
              value: 900
            }
          ];
        
        break;
    
      default:
        break;
    }
    
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onResize(event) {
    this.legend = !(innerWidth < 960);
    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];
  }

}
