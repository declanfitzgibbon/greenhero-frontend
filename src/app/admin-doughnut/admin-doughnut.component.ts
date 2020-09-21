import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin-doughnut',
  templateUrl: './admin-doughnut.component.html',
  styleUrls: ['./admin-doughnut.component.css']
})
export class AdminDoughnutComponent implements OnInit, OnChanges {

  @Input() isDark: boolean;
  @Input() title: string = 'Energy consumption';

  single: any[];
  view: Array<number> = [innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20, ((innerHeight / 2) - (innerHeight / 5)) - 28];

  loading: boolean;

  // options
  labels: boolean = true;
  legend: boolean = true;

  colorScheme: { domain: Array<string> };

  constructor() {
    
  }

  ngOnInit() {
    this.loading = true;

    this.legend = !(innerWidth < 960);

    this.single = [
      {
        name: 'Stations',
        label: 'Stations',
        value: 300
      },
      {
        name: 'Light',
        label: 'Light',
        value: 100
      },
      {
        name: 'Heating',
        label: 'Heating',
        value: 100
      },
      {
        name: 'Outlets',
        label: 'Outlets',
        value: 50
      }
    ];
    
    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }

    setInterval(() => {
      for(let entry of this.single) {
        entry.value += entry.value / 10 < 0 ? 1 : entry.value / 10;
      }
      this.single = [...this.single];
    }, 4000);
    
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.isDark) {
      this.colorScheme = { domain: ["#375c66", "#37665b", "#327785", "#344b80"] }
    } else {
      this.colorScheme = { domain: ["#68b1c4", "#70ccb7", "#52c6de", "#557bd4"] }
    }
  }

  onResize(event) {
    this.legend = !(innerWidth < 960);
    this.view = [innerWidth < 960 ? innerWidth - 20 : (innerWidth / 2) - 20, ((innerHeight / 2) - (innerHeight / 5)) - 28];
  }

}
