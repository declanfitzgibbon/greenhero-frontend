import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { Character } from '../../../models/character';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-event-search-team',
  templateUrl: './event-search-team.component.html',
  styleUrls: ['./event-search-team.component.css']
})
export class EventSearchTeamComponent implements OnInit {

  @Input() event_id: string;
  teams: Array<Team>;
  teamName: string;
  characters: Array<Character>;
  characterSelected: Character;
  characterSelectedID: string;
  user;

  constructor(private teamService: TeamService, private userService: UserService, private characterService: CharacterService) { }

  async ngOnInit() {
    this.user = this.userService.user;
    this.teams = await this.teamService.searchTeams(this.event_id, this.teamName);
    this.characters = await this.characterService.getCharacters(this.user._id);
    this.characterSelected = this.characters[0];
    this.characterSelectedID = this.characterSelected._id;
  }

  apply(team: Team) {
      team.applications.push({
        _id: "900",
        accepted: false,
        character: this.characterSelected,
        rejected: false,
        team_id: team._id,
        user_id: this.user._id
      });
      this.teamService.saveTeam(team._id, team);
  }

  newCharacterSelected() {
    this.characterSelected = this.characters.find((char) => char._id === this.characterSelectedID);
  }

  async filterTeams() {
    this.teams = await this.teamService.searchTeams(this.event_id, this.teamName);
  }

  summaryHealth(team: Team) {
    let total = 0;
    total += team.teamLeader.health;
    for(let member of team.teamMembers) {
      total += member.health;
    }
    return total;
  }

  summaryarmor(team: Team) {
    let total = 0;
    total += team.teamLeader.armor;
    for(let member of team.teamMembers) {
      total += member.armor;
    }
    return total;
  }
  
  summaryAttack(team: Team) {
    let total = 0;
    total += team.teamLeader.attack;
    for(let member of team.teamMembers) {
      total += member.attack;
    }
    return total;
  }

  summaryHealing_factor(team: Team) {
    let total = 0;
    total += team.teamLeader.healing_factor;
    for(let member of team.teamMembers) {
      total += member.healing_factor;
    }
    return total;
  }

  alreadyApplied(team: Team) {
    return team.applications.some((app) => app.user_id === this.user._id);
  }

}
