import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-bars',
  templateUrl: './admin-bars.component.html',
  styleUrls: ['./admin-bars.component.css']
})
export class AdminBarsComponent implements OnInit {

  isDark: boolean;
  @Input() timeFrame: number = 0;

  multi: any[];

  view: any[] = [innerWidth - 20, (innerHeight / 3) - 40];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Consumption';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  loading: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

    this.loading = true;

    this.themeService.getThemeType().subscribe((theme) => {
      this.isDark = theme;
      
      if(this.isDark) {
        this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
      } else {
        this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
      }
    });
    this.isDark = this.themeService.getCurrentThemeType();
    this.showLegend = false;
    switch (this.timeFrame) {
      case 0:
        this.multi = [
          {
            name: '5 hours ago',
            series: [
              {
                name:"You",
                value: 100
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '4 hours ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '3 hours ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          },
          {
            name: '2 hours ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '1 hour ago',
            series: [
              {
                name:"You",
                value: 1000
              },
              {
                name: "Profession average",
                value: 600
              }
            ]
          }
        ];
        break;
      
      case 1:
        this.multi = [
          {
            name: '5 days ago',
            series: [
              {
                name:"You",
                value: 300
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '4 days ago',
            series: [
              {
                name:"You",
                value: 300
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: '3 days ago',
            series: [
              {
                name:"You",
                value: 600
              },
              {
                name: "Profession average",
                value: 700
              }
            ]
          },
          {
            name: '2 days ago',
            series: [
              {
                name:"You",
                value: 300
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: 'Yesterday',
            series: [
              {
                name:"You",
                value: 900
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          }
        ];
        
        break;
      
      case 2:

        this.multi = [
          {
            name: '5 weeks ago',
            series: [
              {
                name:"You",
                value: 600
              },
              {
                name: "Profession average",
                value: 500
              }
            ]
          },
          {
            name: '4 weeks ago',
            series: [
              {
                name:"You",
                value: 700
              },
              {
                name: "Profession average",
                value: 500
              }
            ]
          },
          {
            name: '3 weeks ago',
            series: [
              {
                name:"You",
                value: 600
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: '2 weeks ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 500
              }
            ]
          },
          {
            name: '1 week ago',
            series: [
              {
                name:"You",
                value: 800
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          }
        ];

        break;
      
      case 3:

        this.multi = [
          {
            name: '5 months ago',
            series: [
              {
                name:"You",
                value: 600
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '4 months ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 700
              }
            ]
          },
          {
            name: '3 months ago',
            series: [
              {
                name:"You",
                value: 900
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: '2 months ago',
            series: [
              {
                name:"You",
                value: 600
              },
              {
                name: "Profession average",
                value: 300
              }
            ]
          },
          {
            name: 'Last month',
            series: [
              {
                name:"You",
                value: 1100
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          }
        ];
        
        break;
    
      default:
        break;
    }

    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onResize(event) {
    this.showLegend = false;
    this.view = [innerWidth - 20,  (innerHeight / 3) - 40];
  }

}
