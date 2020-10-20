import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent implements OnInit, OnChanges {

  isDark: boolean;
  @Input() timeFrame: number = 0;

  colorScheme: { domain: Array<string> };
  single: Array<{ name: string, value: number }>;
  single1: Array<{ name: string, value: number }>;
  view: Array<number> = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  loading: boolean;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();

    if (this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
    }

    switch (this.timeFrame) {
      case 0:
        this.single = [
          {
            name: 'Kw',
            value: 550
          },
          {
            name: 'Projected Kw',
            value: 1100
          },
          {
            name: 'People inside',
            value: 4
          },
          {
            name: 'Outlets used',
            value: 1
          }
        ];
        this.single1 = [
          {
            name: 'Completed missions',
            value: 10
          },
          {
            name: 'Earned coins',
            value: 34
          },
          {
            name: 'Number of teams',
            value: 8
          },
          {
            name: 'Onging missions',
            value: 16
          }
        ];
        break;

      case 1:
        this.single = [
          {
            name: 'Kw',
            value: 750
          },
          {
            name: 'Projected Kw',
            value: 1300
          },
          {
            name: 'People inside',
            value: 6
          },
          {
            name: 'Outlets used',
            value: 3
          }
        ];
        this.single1 = [
          {
            name: 'Completed missions',
            value: 14
          },
          {
            name: 'Earned coins',
            value: 56
          },
          {
            name: 'Number of teams',
            value: 6
          },
          {
            name: 'Onging missions',
            value: 14
          }
        ];

        break;

      case 2:

        this.single = [
          {
            name: 'Kw',
            value: 950
          },
          {
            name: 'Projected Kw',
            value: 1500
          },
          {
            name: 'People inside',
            value: 8
          },
          {
            name: 'Outlets used',
            value: 5
          }
        ];
        this.single1 = [
          {
            name: 'Completed missions',
            value: 21
          },
          {
            name: 'Earned coins',
            value: 89
          },
          {
            name: 'Number of teams',
            value: 13
          },
          {
            name: 'Onging missions',
            value: 10
          }
        ];
        break;

      case 3:

        this.single = [
          {
            name: 'Kw',
            value: 650
          },
          {
            name: 'Projected Kw',
            value: 1200
          },
          {
            name: 'People inside',
            value: 5
          },
          {
            name: 'Outlets used',
            value: 2
          }
        ];
        this.single1 = [
          {
            name: 'Completed missions',
            value: 34
          },
          {
            name: 'Earned coins',
            value: 100
          },
          {
            name: 'Number of teams',
            value: 14
          },
          {
            name: 'Onging missions',
            value: 20
          }
        ];

        break;

      default:
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
    this.view = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  }
}
