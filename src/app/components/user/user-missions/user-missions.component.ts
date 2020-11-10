import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private userService: UserService, private missionService: MissionService) { }

  async ngOnInit() {
    this.dailyMissions = await this.missionService.getUserDailyMissions(this.userService.user._id);
    this.weeklyMissions = await this.missionService.getUserWeeklyMissions(this.userService.user._id);
    this.monthlyMissions = await this.missionService.getUserMonthlyMissions(this.userService.user._id);
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
