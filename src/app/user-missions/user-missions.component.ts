import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-missions',
  templateUrl: './user-missions.component.html',
  styleUrls: ['./user-missions.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({opacity: 0})))
    ])
]
})
export class UserMissionsComponent implements OnInit {

  dailyMissions: Array<{
    title: string;
    description: string;
    value: number;
    goal: number;
    reward: number;
    image: string;
    deleted: boolean;
  }>;
  weeklyMissions: Array<{
    title: string;
    description: string;
    value: number;
    goal: number;
    reward: number;
    image: string;
    deleted: boolean;
  }>;
  monthlyMissions: Array<{
    title: string;
    description: string;
    value: number;
    goal: number;
    reward: number;
    image: string;
    deleted: boolean;
  }>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dailyMissions = [
      {
        title: 'Gather energy',
        description: 'Use a power station with the brightness set to 60% maximum for 2 hours',
        goal: 2,
        reward: 20,
        value: 0.8,
        image: "/assets/lightning-icon.png",
        deleted: false
      },
      {
        title: 'Reduce sources',
        description: 'Use an outlet for a max amount of 30 minutes 3 times today',
        goal: 3,
        reward: 10,
        value: 3,
        image: "/assets/outlet-icon.png",
        deleted: false
      }
    ]
    this.weeklyMissions = [
      {
        title: 'Gather energy',
        description: 'Use a power station with the brightness set to 60% maximum for 2 hours',
        goal: 2,
        reward: 20,
        value: 0.8,
        image: "/assets/lightning-icon.png",
        deleted: false
      },
      {
        title: 'Reduce sources',
        description: 'Use an outlet for a max amount of 30 minutes 3 times today',
        goal: 3,
        reward: 10,
        value: 3,
        image: "/assets/outlet-icon.png",
        deleted: false
      }
    ]
    this.monthlyMissions = [
      {
        title: 'Gather energy',
        description: 'Use a power station with the brightness set to 60% maximum for 2 hours',
        goal: 2,
        reward: 20,
        value: 0.8,
        image: "/assets/lightning-icon.png",
        deleted: false
      },
      {
        title: 'Reduce sources',
        description: 'Use an outlet for a max amount of 30 minutes 3 times today',
        goal: 3,
        reward: 10,
        value: 3,
        image: "/assets/outlet-icon.png",
        deleted: false
      }
    ]
  }

  completeTask(tab, i) {
    if(tab === 0) {
      this.dailyMissions[i].deleted = true;
      this.userService.addCoins(this.dailyMissions[i].reward);
    } else if(tab === 1) {
      this.weeklyMissions[i].deleted = true;
      this.userService.addCoins(this.dailyMissions[i].reward);
    } else {
      this.monthlyMissions[i].deleted = true;
      this.userService.addCoins(this.dailyMissions[i].reward);
    }
  }

}
