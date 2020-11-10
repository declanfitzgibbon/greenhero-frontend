import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-character',
  templateUrl: './user-character.component.html',
  styleUrls: ['./user-character.component.css']
})
export class UserCharacterComponent implements OnInit {

  @Input() character: number;

  loading: boolean;
  characterSelectedID: string;
  characterSelected: Character;
  characters: Array<Character>;

  constructor(private characterService: CharacterService, private userService: UserService) { }

  async ngOnInit() {
    this.loading = false;
    this.characters = await this.characterService.getCharacters(this.userService.user._id);
    this.characterSelected = this.characters[0];
    this.characterSelectedID = this.characterSelected._id;
  }

  createAvatar() {}

}
