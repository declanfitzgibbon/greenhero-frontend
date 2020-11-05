import { Injectable } from '@angular/core';
import { Ability, AugmentationType, NodeType, SkillTree } from './skill-tree/skill-tree.component';

export interface Character {
  _id: string;
  user_id: string;
  name: string;
  avatar: string;
  skillTree: SkillTree;
  defense?: number;
  health?: number;
  attack?: number;
  heal_factor?: number;
}

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

  constructor() { }

  createCharacter(character: Character) {
    this.characters.push(character);
  }

  getCharacter(character_id: string) {
    return this.characters.find((character) => character._id === character_id);
  }

  getCharacters() {
    return this.characters;
  }
}
