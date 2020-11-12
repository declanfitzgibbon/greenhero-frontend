import { EventEmitter } from '@angular/core';

export interface Node {
    _id: string,
    ability: Ability,
    type: NodeType,
    amount: number,
    augmentationType?: AugmentationType,
    cost: number,
    owned: boolean,
    sons: Array<Node>;
    x: number;
    y: number;
    clickedEmmiter?: EventEmitter<any>;
    locked: boolean;
}

export enum Ability {
    'Attack' = 'Attack',
    'Armor' = 'Armor',
    'Health' = 'Health',
    'Healing_Factor' = 'Healing_Factor'
  }
  
  export enum NodeType {
    'attack' = 'Attack',
    'stat' = 'Stat'
  }
  
  export enum AugmentationType {
    'percentage' = 'percentage',
    'flat' = 'flat'
  }