import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { EventService } from 'src/app/services/event.service';
import { MissionService } from 'src/app/services/mission.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-admin-progress-bar',
  templateUrl: './admin-progress-bar.component.html',
  styleUrls: ['./admin-progress-bar.component.css']
})

export class AdminProgressBarComponent implements OnInit, OnChanges {
  isDark: boolean;
  @Input() title: string;
  @Input() isFull: boolean = false;
  @Input() bar_select: number;

  view: Array<number>;
  value: number;
  loading: boolean;

  // options
  colorScheme: { domain: Array<string> };

  constructor(private themeService: ThemeService, private consumptionService: ConsumptionService, private eventService: EventService, private missionService: MissionService) {
    
  }

  async ngOnInit() {
    this.loading = true;

    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }
    
    switch(this.bar_select){
      case 1:
        this.title = "Month Allowance";
        this.value = await this.consumptionService.getMonthAllowance(new Date());
        break;
      case 2:
        this.title = "Week Allowance";
        this.value = await this.consumptionService.getWeekAllowance(new Date());
        break;
      case 3:
        this.title = "Missions completed this month";
        this.value = await this.missionService.getMissionsCompleted(new Date());
        break;
      case 4:
        this.title = "People in groups this month";
        this.value = await this.eventService.getPeopleInGroup(new Date());
        break;
      case 5:
        this.title = "Events completed this month";
        this.value = await this.eventService.getCompletedEvents(new Date());
        break;
    }

    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onResize(event) {
    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20) : innerWidth - 20, !this.isFull ? (((innerHeight / 2) - (innerHeight / 5)) - 28) : innerHeight / 2];
  }
}