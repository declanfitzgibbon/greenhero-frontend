import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-doughnut',
  templateUrl: './admin-doughnut.component.html',
  styleUrls: ['./admin-doughnut.component.css']
})
export class AdminDoughnutComponent implements OnInit, OnChanges {

  isDark: boolean;
  @Input() title: string;
  @Input() isFull: boolean = false;
  @Input() timeFrame: number = 0;
  @Input() pieSelector: number;

  single: any[];
  view: Array<number>;

  loading: boolean;

  // options
  labels: boolean = true;
  legend: boolean = true;

  colorScheme: { domain: Array<string> };

  constructor(private themeService: ThemeService) {

  }

  ngOnInit() {
    this.loading = true;

    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];


    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    this.legend = !(innerWidth < 960);

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    switch (this.pieSelector) {
      case 1:
        switch (this.timeFrame) {
          case 0:
            this.single = [
              {
                name: 'Stations',
                label: 'Stations',
                value: 300
              },
              {
                name: 'Light',
                label: 'Light',
                value: 100
              },
              {
                name: 'Heating',
                label: 'Heating',
                value: 100
              },
              {
                name: 'Outlets',
                label: 'Outlets',
                value: 50
              }
            ];
            break;

          case 1:
            this.single = [
              {
                name: 'Stations',
                label: 'Stations',
                value: 400
              },
              {
                name: 'Light',
                label: 'Light',
                value: 100
              },
              {
                name: 'Heating',
                label: 'Heating',
                value: 600
              },
              {
                name: 'Outlets',
                label: 'Outlets',
                value: 700
              }
            ];

            break;

          case 2:
            this.single = [
              {
                name: 'Stations',
                label: 'Stations',
                value: 1100
              },
              {
                name: 'Light',
                label: 'Light',
                value: 700
              },
              {
                name: 'Heating',
                label: 'Heating',
                value: 500
              },
              {
                name: 'Outlets',
                label: 'Outlets',
                value: 400
              }
            ];
            break;

          case 3:

            this.single = [
              {
                name: 'Stations',
                label: 'Stations',
                value: 1400
              },
              {
                name: 'Light',
                label: 'Light',
                value: 400
              },
              {
                name: 'Heating',
                label: 'Heating',
                value: 800
              },
              {
                name: 'Outlets',
                label: 'Outlets',
                value: 400
              }
            ];

            break;

          default:
            break;
        }
        break;
      case 2:
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
