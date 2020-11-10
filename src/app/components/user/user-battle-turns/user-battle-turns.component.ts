import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Team } from 'src/app/models/team';
import { BattleTurnService } from 'src/app/services/battle-turn.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-battle-turns',
  templateUrl: './user-battle-turns.component.html',
  styleUrls: ['./user-battle-turns.component.css']
})
export class UserBattleTurnsComponent implements OnInit {

  @Input() team: Team;
  participants: Array<Character>;
  userId: string = '1';
  constructor(private turnService: BattleTurnService, private userService: UserService) { 
  }

  ngOnInit(): void {

    this.userId = this.userService.user._id;
    this.participants = Object.assign([], this.team.teamMembers);
    this.participants.push(this.team.teamLeader);

    this.sortParticipants(this.team.turnOrder);

    this.turnService.turnChange.subscribe((turnsEmmitted) => this.sortParticipants(turnsEmmitted));
  }

  sortParticipants(turns: Array<string>) {
    this.participants.sort((a, b) => {
      return turns.indexOf(a._id) - turns.indexOf(b._id); 
    });
  }

}
