import { Node } from './node';

export interface SkillTree {
    _id: string,
    class: string,
    nodes: Array<Node>
}