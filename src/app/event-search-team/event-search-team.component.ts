import { Component, Input, OnInit } from '@angular/core';
import { Character, CharacterService } from '../character.service';
import { Team, TeamService } from '../team.service';
import { UserService } from '../user.service';

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

  ngOnInit(): void {
    this.user = this.userService.user;
    this.teams = this.teamService.searchTeams(this.event_id, this.teamName);
    this.characters = this.characterService.getCharacters();
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

  filterTeams() {
    this.teams = this.teamService.searchTeams(this.event_id, this.teamName);
  }

  summaryHealth(team: Team) {
    let total = 0;
    total += team.teamLeader.health;
    for(let member of team.teamMembers) {
      total += member.health;
    }
    return total;
  }

  summaryDefense(team: Team) {
    let total = 0;
    total += team.teamLeader.defense;
    for(let member of team.teamMembers) {
      total += member.defense;
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

  summaryHeal_factor(team: Team) {
    let total = 0;
    total += team.teamLeader.heal_factor;
    for(let member of team.teamMembers) {
      total += member.heal_factor;
    }
    return total;
  }

  alreadyApplied(team: Team) {
    return team.applications.some((app) => app.user_id === this.user._id);
  }

}
