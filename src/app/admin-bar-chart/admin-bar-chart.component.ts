import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-bar-chart',
  templateUrl: './admin-bar-chart.component.html',
  styleUrls: ['./admin-bar-chart.component.css']
})
export class AdminBarChartComponent implements OnInit {

  isDark: boolean;
  @Input() title: string = 'Consumption per profession';
  @Input() timeFrame: number = 0;

  single: any[];
  multi: any[];

  view: any[] = [innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20, ((innerHeight / 2) - (innerHeight / 5)) - 28];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  loading: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

    this.loading = true;

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
    this.showLegend = !(innerWidth < 960);

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    switch (this.timeFrame) {
      case 0:
        this.single = [
          {
            name: 'Developers',
            label: 'Developers',
            value: 300
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 100
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 100
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 50
          }
        ];
        break;

      case 1:
        this.single = [
          {
            name: 'Developers',
            label: 'Developers',
            value: 400
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 200
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 500
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 100
          }
        ];

        break;

      case 2:

        this.single = [
          {
            name: 'Developers',
            label: 'Developers',
            value: 600
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 200
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 300
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 400
          }
        ];

        break;

      case 3:

        this.single = [
          {
            name: 'Developers',
            label: 'Developers',
            value: 20
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 100
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 300
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 300
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
    this.showLegend = !(innerWidth < 960);
    this.view = [innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20, ((innerHeight / 2) - (innerHeight / 5)) - 28];
  }

}
