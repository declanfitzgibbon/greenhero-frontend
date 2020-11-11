import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { BattleTurnService } from 'src/app/services/battle-turn.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-battle',
  templateUrl: './user-battle.component.html',
  styleUrls: ['./user-battle.component.css']
})
export class UserBattleComponent implements OnInit {

  target: {chosen: boolean, friend: boolean};
  team: Team;
  action: { action: string, actionNumber: number };

  constructor(private teamService: TeamService, private route: ActivatedRoute, private userService: UserService, private battleTurnService: BattleTurnService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.team = await this.teamService.getPlayerTeamForEvent(params.eventId, this.userService.user._id);
      this.battleTurnService.setLocalTurns(this.team.turnOrder);
    });
  }

  setTarget(target) {
    this.target = target;
  }

  setAction(action) {
    this.action = action;
  }

}
