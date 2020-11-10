import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/models/team';
import { Avatar } from 'src/app/models/avatar';
import { Character } from 'src/app/models/character';
import { TeamService } from 'src/app/services/team.service';
import { CharacterService } from 'src/app/services/character.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-event-create-team',
  templateUrl: './user-event-create-team.component.html',
  styleUrls: ['./user-event-create-team.component.css']
})
export class UserEventCreateTeamComponent implements OnInit {

  @Input() event_id: string;
  @Output() teamCreated: EventEmitter<Team> = new EventEmitter();
  avatars: Array<Avatar> = [
    {
      name: 'Blood Seekers',
      src: "/assets/team-avatar-3.png"
    },
    {
      name: 'Bats',
      src: "/assets/team-avatar-1.png"
    },
    {
      name: 'Victorious',
      src: "/assets/team-avatar-2.png"
    },
  ];
  selectedAvatar: Avatar;
  teamName: string;
  selected: string;
  characterSelectedID: string;
  characterSelected: Character;
  characters: Array<Character>;



  constructor(private teamService: TeamService, private characterService: CharacterService, private userService: UserService) { }

  async ngOnInit() {
    this.selectedAvatar = this.avatars[0];
    this.selected = this.avatars[0].src;
    this.characters = await this.characterService.getCharacters(this.userService.user._id);
    this.characterSelected = this.characters[0];
    this.characterSelectedID = this.characterSelected._id;
  }

  newAvatarSelected() {
    this.selectedAvatar = this.avatars.find((avatar) => avatar.src === this.selected);
  }

  newCharacterSelected() {
    this.characterSelected = this.characters.find((char) => char._id === this.characterSelectedID);
  }

  createTeam() {
    const team: Team = {
      _id: "1",
      avatar: this.selectedAvatar.src,
      event_id: this.event_id,
      name: this.teamName,
      teamLeader: this.characterSelected,
      teamMembers: [],
      applications: [],
      turnOrder: [this.characterSelected._id]
    };
    this.teamService.addTeam(team);
    this.teamCreated.emit(team);
  }

}
