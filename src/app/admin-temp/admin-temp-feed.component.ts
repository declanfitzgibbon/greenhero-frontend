import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-admin-temp',
  templateUrl: './admin-temp-feed.component.html',
  styleUrls: ['./admin-temp-feed.component.css'],
})
export class AdminTempFeedComponent implements OnInit {

  isDark: boolean;

  @Input() timeFrame: number = 0;

 colorScheme: {domain: Array<string> };
  single: Array<{name: string, value: number | string}>;
  view: Array<number> = [innerWidth - 20, innerWidth < 500 ? 500 : (innerHeight / 4) - 40];
  loading: boolean;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    
    this.themeService.getThemeType().subscribe((theme) => {
      this.isDark = theme;
      if(this.isDark) {
        this.colorScheme = { domain: ["#375c66", "#37665b"] }
      } else {
        this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
      }
    });

    this.isDark = this.themeService.getCurrentThemeType();

    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
    }

    switch (this.timeFrame) {
      case 0:
        this.single = [
          {
            name: 'Temp C°',
            value: 25
          }
        ];
        break;

      case 1:
          this.single = [ 
            {
              name : 'Temp C°',
              value: 26
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

  onSelect(card: {name: string, value: number}) {
    console.log(card);
  }

  onResize(event) {
    this.view = [innerWidth - 20, innerWidth < 500 ? 500 : (innerHeight / 4) - 40];
  }
}

