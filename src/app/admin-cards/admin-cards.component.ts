import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent implements OnInit, OnChanges {

  @Input() isDark: boolean;

  colorScheme: {domain: Array<string> };
  single: Array<{name: string, value: number}>;
  view: Array<number> = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.loading = true;

    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
    }

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

    setInterval(() => {
      for(let entry of this.single) {
        entry.value += Math.floor(Math.random() * 100);
      }
      this.single = [...this.single];
    }, 4000);

    this.loading = false;
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7"] }
    }
  }

  onSelect(card: {name: string, value: number}) {
    console.log(card);
  }

  onResize(event) {
    this.view = [innerWidth - 20, innerWidth < 500 ? 500 : innerHeight / 5];
  }
}
