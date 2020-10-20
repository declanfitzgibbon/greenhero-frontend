import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-line-graph',
  templateUrl: './admin-line-graph.component.html',
  styleUrls: ['./admin-line-graph.component.css']
})
export class AdminLineGraphComponent implements OnInit {

  isDark: boolean;
  @Input() title: string = 'Consumption per profession and month';
  @Input() timeFrame: number = 0;

  multi: any[];
  view: any[] = [innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20, ((innerHeight / 2) - (innerHeight / 5)) - 28];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  yAxisLabel: string = 'Kw';
  timeline: boolean = true;

  colorScheme = {
    domain: ["#375c66", "#37665b", "#327785", "#344b80"]
  };

  loading: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.loading = true;

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
        this.multi = [
          {
            "name": "Developer",
            "series": [
              {
                "name": "January",
                "value": 6200
              },
              {
                "name": "February",
                "value": 7300
              },
              {
                "name": "March",
                "value": 8940
              }
            ]
          },
          {
            "name": "Designer",
            "series": [
              {
                "name": "January",
                "value": 5000
              },
              {
                "name": "February",
                "value": 7800
              },
              {
                "name": "March",
                "value": 9840
              }
            ]
          },
          {
            "name": "Lawyer",
            "series": [
              {
                "name": "January",
                "value": 2600
              },
              {
                "name": "February",
                "value": 3700
              },
              {
                "name": "March",
                "value": 2940
              }
            ]
          },
          {
            "name": "Engineer",
            "series": [
              {
                "name": "January",
                "value": 3100
              },
              {
                "name": "February",
                "value": 3750
              },
              {
                "name": "March",
                "value": 4540
              }
            ]
          }
        ];
        break;

      case 1:
        this.multi = [
          {
            "name": "Developer",
            "series": [
              {
                "name": "January",
                "value": 5200
              },
              {
                "name": "February",
                "value": 6300
              },
              {
                "name": "March",
                "value": 7940
              }
            ]
          },
          {
            "name": "Designer",
            "series": [
              {
                "name": "January",
                "value": 6000
              },
              {
                "name": "February",
                "value": 8800
              },
              {
                "name": "March",
                "value": 8840
              }
            ]
          },
          {
            "name": "Lawyer",
            "series": [
              {
                "name": "January",
                "value": 4600
              },
              {
                "name": "February",
                "value": 5700
              },
              {
                "name": "March",
                "value": 4940
              }
            ]
          },
          {
            "name": "Engineer",
            "series": [
              {
                "name": "January",
                "value": 4100
              },
              {
                "name": "February",
                "value": 5750
              },
              {
                "name": "March",
                "value": 2540
              }
            ]
          }
        ];

        break;

      case 2:

        this.multi = [
          {
            "name": "Developer",
            "series": [
              {
                "name": "January",
                "value": 4200
              },
              {
                "name": "February",
                "value": 3300
              },
              {
                "name": "March",
                "value": 5940
              }
            ]
          },
          {
            "name": "Designer",
            "series": [
              {
                "name": "January",
                "value": 4000
              },
              {
                "name": "February",
                "value": 5800
              },
              {
                "name": "March",
                "value": 7840
              }
            ]
          },
          {
            "name": "Lawyer",
            "series": [
              {
                "name": "January",
                "value": 4600
              },
              {
                "name": "February",
                "value": 5700
              },
              {
                "name": "March",
                "value": 4940
              }
            ]
          },
          {
            "name": "Engineer",
            "series": [
              {
                "name": "January",
                "value": 5100
              },
              {
                "name": "February",
                "value": 7950
              },
              {
                "name": "March",
                "value": 5540
              }
            ]
          }
        ];

        break;

      case 3:

        this.multi = [
          {
            "name": "Developer",
            "series": [
              {
                "name": "January",
                "value": 4200
              },
              {
                "name": "February",
                "value": 9000
              },
              {
                "name": "March",
                "value": 5940
              }
            ]
          },
          {
            "name": "Designer",
            "series": [
              {
                "name": "January",
                "value": 6000
              },
              {
                "name": "February",
                "value": 4800
              },
              {
                "name": "March",
                "value": 8840
              }
            ]
          },
          {
            "name": "Lawyer",
            "series": [
              {
                "name": "January",
                "value": 5600
              },
              {
                "name": "February",
                "value": 7700
              },
              {
                "name": "March",
                "value": 4940
              }
            ]
          },
          {
            "name": "Engineer",
            "series": [
              {
                "name": "January",
                "value": 7100
              },
              {
                "name": "February",
                "value": 5750
              },
              {
                "name": "March",
                "value": 6540
              }
            ]
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
    this.view = [innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20, ((innerHeight / 2) - (innerHeight / 5)) - 28];
  }

}
