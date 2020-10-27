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
  single: any[];
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
            name: 'Most completed mission',
            value: 'Water saving'
          },
          {
            name: 'Most completed event',
            value: 'Dungeon of dragon'
          },
          {
            name: 'Most activative user',
            value: 'Reynaldo'
          }
        ];
        break;

      case 1:
        this.single = [
          {
            name: 'Most completed mission',
            value: 'Water saving'
          },
          {
            name: 'Most completed event',
            value: 'Dungeon of dragon'
          },
          {
            name: 'Most activative user',
            value: 'Reynaldo'
          }
        ];
        break;

      case 2:
        this.single = [
          {
            name: 'Most completed mission',
            value: 'Water saving'
          },
          {
            name: 'Most completed event',
            value: 'Dungeon of dragon'
          },
          {
            name: 'Most activative user',
            value: 'Reynaldo'
          }
        ];
        break;

      case 3:
        this.single = [
          {
            name: 'Most completed mission',
            value: 'Water saving'
          },
          {
            name: 'Most completed event',
            value: 'Dungeon of dragon'
          },
          {
            name: 'Most activative user',
            value: 'Reynaldo'
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
    this.view = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  }
}
