import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-consumption',
  templateUrl: './user-consumption.component.html',
  styleUrls: ['./user-consumption.component.css']
})
export class UserConsumptionComponent implements OnInit {

  timeFrame: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
