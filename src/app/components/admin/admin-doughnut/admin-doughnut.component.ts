import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { ThemeService } from 'src/app/services/theme.service';

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

  constructor(private themeService: ThemeService, private consumptionService: ConsumptionService) {

  }

  async ngOnInit() {
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
        this.single = await this.consumptionService.getConsumptionByCategory(this.timeFrame);
        break;
      case 2:
        this.single = await this.consumptionService.getConsumptionByProfession(this.timeFrame);
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
