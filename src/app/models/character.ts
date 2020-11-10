import { SkillTree } from './skillTree';

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