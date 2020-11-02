import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-user-consumption-cards',
  templateUrl: './user-consumption-cards.component.html',
  styleUrls: ['./user-consumption-cards.component.css']
})
export class UserConsumptionCardsComponent implements OnInit {

  isDark: boolean;

  @Input() timeFrame: number = 0;
  @Input() cardSelector: number;

  colorScheme: { domain: Array<string> };
  single: Array<{ name: string, value: number | string }>;
  view: Array<number> = [innerWidth - 20, innerWidth < 500 ? 500 : (innerHeight / 4) - 40];
  loading: boolean;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
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
        switch (this.timeFrame) {
          case 0:
            this.single = [
              {
                name: 'Total',
                value: 550
              },
              {
                name: 'Highest category',
                value: "Outlets"
              },
              {
                name: 'Highest day',
                value: "Monday"
              },
              {
                name: 'Coins saved',
                value: 1
              }
            ];
            break;

          case 1:
            this.single = [
              {
                name: 'Total',
                value: 1100
              },
              {
                name: 'Highest category',
                value: "Light"
              },
              {
                name: 'Highest day',
                value: "Tuesday"
              },
              {
                name: 'Coins saved',
                value: 10
              }
            ];

            break;

          case 2:

            this.single = [
              {
                name: 'Total',
                value: 4400
              },
              {
                name: 'Highest category',
                value: "Stations"
              },
              {
                name: 'Highest day',
                value: "Wednesday"
              },
              {
                name: 'Coins saved',
                value: 40
              }
            ];
            break;

          case 3:

            this.single = [
              {
                name: 'Total',
                value: 52800
              },
              {
                name: 'Highest category',
                value: "Stations"
              },
              {
                name: 'Highest day',
                value: "Wednesday"
              },
              {
                name: 'Coins saved',
                value: 480
              }
            ];

            break;

          default:
            break;
        };
        break;
      case 1:
        this.single = [
          {
            name: "Power used",
            value: 20
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
    this.view = [innerWidth - 20, innerWidth < 500 ? 500 : (innerHeight / 4) - 40];
  }

}
