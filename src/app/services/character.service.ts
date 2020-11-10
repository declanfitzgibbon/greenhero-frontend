import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Node, Ability, AugmentationType, NodeType } from '../models/node';
import { SkillTree } from '../models/skillTree';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters: Array<Character> = [{
    _id: '1',
    avatar: "/assets/elf-avatar.png",
    name: "My Elf Mage",
    user_id: '1',
    skillTree:  {
      _id: "1",
      class: "Mage",
      nodes: [
        {
          _id: "1",
          ability: Ability.attack,
          amount: 15,
          sons: [{
            _id: "2",
            ability: Ability.attack,
            amount: 15,
            type: NodeType.stat,
            x: 150,
            y: 180,
            augmentationType: AugmentationType.percentage,
            cost: 200,
            owned: true,
            sons: [{
              _id: "3",
              ability: Ability.attack,
              amount: 15,
              type: NodeType.stat,
              x: 250,
              y: 180,
              sons: [{
                _id: "4",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 350,
                y: 180,
                sons: [],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: true,
                locked: true
              }],
              augmentationType: AugmentationType.percentage,
              cost: 200,
              owned: true,
              locked: true
            }],
            locked: true
          }],
          type: NodeType.stat,
          x: 50,
          y: 180,
          augmentationType: AugmentationType.percentage,
          cost: 200,
          owned: true,
          locked: true
        }
      ]
    },
    defense: 100,
    attack: 20,
    heal_factor: 100,
    health: 400
  }];

  constructor(private http: HttpClient) { }

  createCharacter(character: Character) {
    this.characters.push(character);
  }

  getCharacter(character_id: string) {
    return this.characters.find((character) => character._id === character_id);
  }

  async getCharacters(user_id: string) {
    const characters = await this.http.get<Array<Character>>('http://localhost:8080/Character/'+encodeURIComponent(user_id)).toPromise();
    for(let char of characters) {
      char = await this.getCharacterInfo(char);
    }

    return characters
  }

  async getCharacterInfo(character: Character) {
    character.skillTree = await this.http.get<SkillTree>('http://localhost:8080/Character/'+encodeURIComponent((character.skillTree as any))).toPromise();

    for(let i = 0; i < character.skillTree.nodes.length; i++) {
      const node = character.skillTree.nodes[i];
      character.skillTree.nodes[i] = await this.http.get<Node>('http://localhost:8080/Node/'+encodeURIComponent((node as any))).toPromise();
    }

    return character;
  }
}
