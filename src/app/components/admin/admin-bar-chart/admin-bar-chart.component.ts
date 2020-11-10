import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ThemeService } from 'src/app/services/theme.service';
import { MissionService } from 'src/app/services/mission.service';

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

  constructor(private themeService: ThemeService, private eventService: EventService, private missionService: MissionService) { }

  async ngOnInit() {

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
        this.multi = await this.missionService.getMostCompleted(this.timeFrame);
        break;
      case 1:
        this.title = "Event engagement"
        this.xAxisLabel = 'Profession';
        this.yAxisLabel = 'Number of people formed a group';
        this.multi = await this.eventService.getMostGrouped(this.timeFrame);
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
