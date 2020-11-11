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
    await this.http.post('http://localhost:8080/Character/', {...character}).toPromise();
  }

  getCharacter(character_id: string) {
    return this.http.get<Character>('http://localhost:8080/Character/getCharacterById/'+encodeURIComponent(character_id)).toPromise();
  }

  async getCharacters(user_id: string) {
    const characters = await this.http.get<Array<Character>>('http://localhost:8080/Character/getByUserId/'+encodeURIComponent(user_id)).toPromise();
    return characters;
  }
}
