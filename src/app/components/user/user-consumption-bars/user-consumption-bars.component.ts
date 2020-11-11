import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-consumption-bars',
  templateUrl: './user-consumption-bars.component.html',
  styleUrls: ['./user-consumption-bars.component.css']
})
export class UserConsumptionBarsComponent implements OnInit {

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

  constructor(private themeService: ThemeService, private consumptionService: ConsumptionService, private userService: UserService) { }

  async ngOnInit() {

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

    this.multi = await this.consumptionService.getUserConsumptionWithComparisson(this.userService.user._id, this.timeFrame);

    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    console.log(this.multi);
    

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
