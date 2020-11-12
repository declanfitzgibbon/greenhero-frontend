import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/event';
import { Team } from 'src/app/models/team';
import { BattleTurnService } from 'src/app/services/battle-turn.service';
import { EventService } from 'src/app/services/event.service';
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
  event: Event;
  action: { action: string, actionNumber: number };
  firstTurnId: string;
  loading: boolean;

  constructor(private teamService: TeamService, private route: ActivatedRoute, private userService: UserService, private battleTurnService: BattleTurnService, private eventService: EventService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParams.subscribe(async (params) => {
      this.team = await this.teamService.getPlayerTeamForEvent(params.eventId, this.userService.user._id);
      this.event = await this.eventService.getEventByID(params.eventId);
      this.battleTurnService.setLocalTurns(this.team.turnOrder);
      this.firstTurnId = this.team.turnOrder[0];
      this.loading = false;
    });
  }

  setTarget(target) {
    this.target = target;
  }

  setAction(action) {
    this.action = action;
  }

}
