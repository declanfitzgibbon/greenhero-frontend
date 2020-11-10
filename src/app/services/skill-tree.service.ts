import { Injectable } from '@angular/core';
import { Ability, AugmentationType, NodeType } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService {

  constructor() { }

  async getTrees() {
    return [{
      name: "Mage",
      render: true,
      skillTree: {
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
              owned: false,
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
                  owned: false,
                  locked: false
                }],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: false,
                locked: false
              }],
              locked: false
            }],
            type: NodeType.stat,
            x: 50,
            y: 180,
            augmentationType: AugmentationType.percentage,
            cost: 200,
            owned: false,
            locked: false
          }
        ]
      }
    },
    {
      name: "Priest",
      render: false,
      skillTree: {
        _id: "2",
        class: "Priest",
        nodes: [
          {
            _id: "5",
            ability: Ability.attack,
            amount: 15,
            sons: [{
              _id: "6",
              ability: Ability.attack,
              amount: 15,
              type: NodeType.stat,
              x: 150,
              y: 180,
              augmentationType: AugmentationType.percentage,
              cost: 200,
              owned: false,
              sons: [{
                _id: "7",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 250,
                y: 260,
                sons: [],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: false,
                locked: false
              }, {
                _id: "8",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 250,
                y: 100,
                sons: [],
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: false,
                locked: false
              }],
              locked: false
            }],
            type: NodeType.stat,
            x: 50,
            y: 180,
            augmentationType: AugmentationType.percentage,
            cost: 200,
            owned: false,
            locked: false
          }
        ]
      }
    }];
  }
}
