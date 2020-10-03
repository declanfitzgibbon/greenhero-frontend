import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-user-consumption-doughnut',
  templateUrl: './user-consumption-doughnut.component.html',
  styleUrls: ['./user-consumption-doughnut.component.css']
})
export class UserConsumptionDoughnutComponent implements OnInit {

  isDark: boolean;
  @Input() title: string = 'Energy consumption';
  @Input() isFull: boolean = false;
  @Input() timeFrame: number = 0;

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

    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : (innerHeight / 2.5) - 40];
    

    this.themeService.getThemeType().subscribe((theme) => {
      this.isDark = theme;
      
      if(this.isDark) {
        this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
      } else {
        this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
      }
    });
    
    this.isDark = this.themeService.getCurrentThemeType();

    this.legend = !(innerWidth < 960);

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
            value: 600
          },
          {
            name: 'Light',
            label: 'Light',
            value: 200
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: 200
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: 100
          }
        ];
        
        break;
      
      case 2:

        this.single = [
          {
            name: 'Stations',
            label: 'Stations',
            value: 1200
          },
          {
            name: 'Light',
            label: 'Light',
            value: 400
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: 400
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: 200
          }
        ];
        break;
      
        case 3:

          this.single = [
            {
              name: 'Stations',
              label: 'Stations',
              value: 14400
            },
            {
              name: 'Light',
              label: 'Light',
              value: 4800
            },
            {
              name: 'Heating',
              label: 'Heating',
              value: 4800
            },
            {
              name: 'Outlets',
              label: 'Outlets',
              value: 2400
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
    this.legend = !(innerWidth < 960);
    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : (innerHeight / 2.5) - 40];
  }

}
