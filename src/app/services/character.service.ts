import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Node, Ability, AugmentationType, NodeType } from '../models/node';
import { SkillTree } from '../models/skillTree';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  async createCharacter(character: Character) {
    character.skillTree = (character.skillTree._id as any);
    await this.http.post('https://greenhero.herokuapp.com/Character/', {...character}).toPromise();
  }

  getCharacter(character_id: string) {
    return this.http.get<Character>('https://greenhero.herokuapp.com/Character/getCharacterById/'+encodeURIComponent(character_id)).toPromise();
  }

  async getCharacters(user_id: string) {
    const characters = await this.http.get<Array<Character>>('https://greenhero.herokuapp.com/Character/getByUserId/'+encodeURIComponent(user_id)).toPromise();
    return characters;
  }
}
