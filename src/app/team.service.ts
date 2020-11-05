import { Injectable } from '@angular/core';
import { Character } from './character.service';
import { Application } from './event-team-lobby/event-team-lobby.component';

export interface Team {
  _id: string;
  name: string;
  avatar: string;
  event_id: string;
  teamLeader: Character;
  teamMembers: Array<Character>;
  applications: Array<Application>;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Array<Team> = [];

  constructor() { }

  getPlayerTeamForEvent(event_id: string, user_id: string) {
    return this.teams.find((team) => team.event_id === event_id && (team.teamLeader.user_id === user_id || team.teamMembers.some((member) => member.user_id === user_id)));
  }

  addTeam(team: Team) {
    this.teams.push(team);
  }

}
