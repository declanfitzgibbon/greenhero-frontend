import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  characters: Array<Character>;

  constructor(private characterService: CharacterService, private userService: UserService, private router: Router) { }

  async ngOnInit() {
    this.loading = true;
    this.characters = await this.characterService.getCharacters(this.userService.user._id);
    this.loading = false;
  }

  goToTree(index: number) {
    this.router.navigate(['user','character', 'skill-tree'], {
      queryParams: {
        tree_id: this.characters[index].skillTree._id
      }
    })
  }

  createAvatar() {}

}
