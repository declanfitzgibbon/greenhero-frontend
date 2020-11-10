import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-consumption-cards',
  templateUrl: './user-consumption-cards.component.html',
  styleUrls: ['./user-consumption-cards.component.css']
})
export class UserConsumptionCardsComponent implements OnInit {

  isDark: boolean;

  @Input() isFull: boolean = false;
  @Input() timeFrame: number = 0;
  @Input() cardSelector: number;
  @Input() consumption: number;

  colorScheme: { domain: Array<string> };
  single: Array<{ name: string, value: number | string }>;
  view: Array<number>;
  
  loading: boolean;

  constructor(private userService: UserService, private themeService: ThemeService, private consumptionService: ConsumptionService) {
  }

  async ngOnInit() {
    this.loading = true;

    this.themeService.getThemeType().subscribe((theme) => {
      this.isDark = theme;
      if (this.isDark) {
        this.colorScheme = { domain: ["#375c66", "#37665b"] }
      } else {
        this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
      }
    });

    this.isDark = this.themeService.getCurrentThemeType();
    
    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
    }

    switch (this.cardSelector) {
      case 0:
        this.view = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
        this.single = [
          {
            name: 'Total',
            value: await this.consumptionService.getTotalUserConsumption(this.userService.user._id, this.timeFrame)
          },
          {
            name: 'Highest category',
            value: await this.consumptionService.getUserHighestCategory(this.userService.user._id, this.timeFrame)
          },
          {
            name: 'Highest day',
            value: await this.consumptionService.getUserHighestDay(this.userService.user._id, this.timeFrame)
          },
          {
            name: 'Coins saved',
            value: await this.consumptionService.getUserCoinsSaved(this.userService.user._id, this.timeFrame)
          }
        ];
        break;
      case 1:
        this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : innerWidth / 3 - 40) : innerWidth / 2 - 20, !this.isFull ? ((innerHeight / 3 - 40)) : innerHeight / 2];
        this.single = [
          {
            name: "Power used",
            value: this.consumption
          }
        ];
        break;
    }

    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  onSelect(card: { name: string, value: number }) {
    console.log(card);
  }

  onResize(event) {
    this.view = [!this.isFull ? (innerWidth < 960 ? innerWidth - 20 : innerWidth / 2) : innerWidth - 20, !this.isFull ? (((innerHeight / 3) - 40)) : innerHeight / 2];
}

}
