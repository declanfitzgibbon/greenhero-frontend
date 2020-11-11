import { Character } from './character';
import { Application } from './application';

export interface Team {
    _id: string;
    teamName: string;
    avatar: string;
    event_id: string;
    teamLeader: Character;
    teamMembers: Array<Character>;
   // applications: Array<Application>;
   //turnOrder: Array<string>;
    completed: boolean
  }
  