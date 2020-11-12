import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { ConsumptionService } from 'src/app/services/consumption.service';


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

  constructor(private themeService: ThemeService, private consumptionService: ConsumptionService) { }

  async ngOnInit() {
    
    this.loading = true;

    this.themeService.getThemeType().subscribe((theme) => {
      this.isDark = theme;

      if (this.isDark) {
        this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
      } else {
        this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
      }
    })
    this.isDark = this.themeService.getCurrentThemeType();
    this.showLegend = false;

    this.multi = await this.consumptionService.getConsumptionSummary(this.timeFrame);

    if (this.isDark) {
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
    this.view = [innerWidth - 20, (innerHeight / 3) - 40];
  }

}
