import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-missions',
  templateUrl: './user-missions.component.html',
  styleUrls: ['./user-missions.component.css']
})
export class UserMissionsComponent implements OnInit {

  missions: Array<{
    title: string;
    description: string;
    value: number;
    goal: number;
    reward: number;
    image: string;
  }>;
  constructor() { }

  ngOnInit(): void {
    this.missions = [
      {
        title: 'Gather energy',
        description: 'Spend a max of 25 Kw of energy today',
        goal: 15,
        reward: 20,
        value: 5,
        image: "/assets/lightning-icon.png"
      },
      {
        title: 'Focus income',
        description: 'Use 2 outlets maximum today',
        goal: 2,
        reward: 10,
        value: 0,
        image: "/assets/outlet-icon.png"
      },
    ]
  }

}
