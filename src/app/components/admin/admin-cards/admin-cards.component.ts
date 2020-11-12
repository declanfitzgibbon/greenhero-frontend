import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MissionService } from 'src/app/services/mission.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent implements OnInit, OnChanges {

  isDark: boolean;
  @Input() timeFrame: number = 0;

  colorScheme: { domain: Array<string> };
  single: any[];
  view: Array<number> = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  loading: boolean;

  constructor(private themeService: ThemeService, private missionService: MissionService, private eventService: EventService, private userService: UserService) {
  }

  async ngOnInit() {
    this.loading = true;

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
    }

    this.single = [
      {
        name: 'Most completed mission',
        value: await this.missionService.getTopCompleted(this.timeFrame)
      },
      {
        name: 'Most completed event',
        value: await this.eventService.getTopCompleted(this.timeFrame)
      }
    ];

    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onSelect(card: { name: string, value: number }) {
  }

  onResize(event) {
    this.view = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  }
}
