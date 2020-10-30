import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-bar-chart',
  templateUrl: './admin-bar-chart.component.html',
  styleUrls: ['./admin-bar-chart.component.css']
})
export class AdminBarChartComponent implements OnInit {

  isDark: boolean;
  @Input() title: string;
  @Input() timeFrame: number = 0;
  @Input() barSelector: number;

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
  barPadding = 80;

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

    switch (this.barSelector) {
      case 0:
        this.title = "Mission engagement"
        this.xAxisLabel = 'Mission';
        this.yAxisLabel = 'Number of people completed';
        switch (this.timeFrame) {
          case 0:
            this.multi = [
              {
                name: 'Water saving',
                value: 100
              },
              {
                name: 'Electricity',
                value: 150
              },
              {
                name: 'Aircondition',
                value: 80
              }
            ];
            break;
          case 1:
            this.multi = [
              {
                name: 'Water saving',
                value: 300
              },
              {
                name: 'Electricity',
                value: 550
              },
              {
                name: 'Aircondition',
                value: 700
              }
            ];
            break;
          case 2:
            this.multi = [
              {
                name: 'Water saving',
                value: 600
              },
              {
                name: 'Electricity',
                value: 850
              },
              {
                name: 'Aircondition',
                value: 980
              }
            ];
            break;
          case 3:
            this.multi = [
              {
                name: 'Water saving',
                value: 1100
              },
              {
                name: 'Electricity',
                value: 1250
              },
              {
                name: 'Aircondition',
                value: 1580
              }
            ];
            break;
        };
        break;
      case 1:
        this.title = "Event engagement"
        this.xAxisLabel = 'Profession';
        this.yAxisLabel = 'Number of people formed a group';
        switch (this.timeFrame) {
          case 0:
            this.multi = [
              {
                name: 'Developers',
                value: 100
              },
              {
                name: 'Lawyers',
                value: 50
              },
              {
                name: 'Designers',
                value: 80
              },
              {
                name: 'Engineers',
                value: 120
              }
            ];
            break;
          case 1:
            this.multi = [
              {
                name: 'Developers',
                value: 300
              },
              {
                name: 'Lawyers',
                value: 250
              },
              {
                name: 'Designers',
                value: 120
              },
              {
                name: 'Engineers',
                value: 420
              }
            ];
            break;
          case 2:
            this.multi = [
              {
                name: 'Developers',
                value: 500
              },
              {
                name: 'Lawyers',
                value: 450
              },
              {
                name: 'Designers',
                value: 380
              },
              {
                name: 'Engineers',
                value: 820
              }
            ];
            break;
          case 3:
            this.multi = [
              {
                name: 'Developers',
                value: 900
              },
              {
                name: 'Lawyers',
                value: 690
              },
              {
                name: 'Designers',
                value: 780
              },
              {
                name: 'Engineers',
                value: 1200
              }
            ];
            break;
        };
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
