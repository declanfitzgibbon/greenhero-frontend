import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private themeService: ThemeService, private userService: UserService, private consumptionService: ConsumptionService) {
    
  }

  async ngOnInit() {
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

    this.single = [
      {
        name: 'Stations',
        label: 'Stations',
        value: await this.consumptionService.getUserCategoryConsumption(this.userService.user._id, 'Stations', this.timeFrame)
      },
      {
        name: 'Light',
        label: 'Light',
        value: await this.consumptionService.getUserCategoryConsumption(this.userService.user._id, 'Light', this.timeFrame)
      },
      {
        name: 'Heating',
        label: 'Heating',
        value: await this.consumptionService.getUserCategoryConsumption(this.userService.user._id, 'Heating', this.timeFrame)
      },
      {
        name: 'Outlets',
        label: 'Outlets',
        value: await this.consumptionService.getUserCategoryConsumption(this.userService.user._id, 'Outlets', this.timeFrame)
      }
    ];

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
