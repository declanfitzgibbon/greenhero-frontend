import { Component, OnInit, Input } from '@angular/core';
import { Character, CharacterService } from '../character.service';

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

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.loading = false;
    this.characters = this.characterService.getCharacters();
    this.characterSelected = this.characters[0];
    this.characterSelectedID = this.characterSelected._id;
  }

  createAvatar() {}

}
