import { SkillTree } from './skillTree';

export interface Character {
    _id: string;
    user_id: string;
    characterName: string;
    characterDescription?: string;
    avatar: string;
    skillTree: SkillTree;
    defense?: number;
    health?: number;
    attack?: number;
    healing_factor?: number;
}