import { Character } from "./character";

export interface Application {
    _id: string;
    team_id: string;
    user_id: string;
    character: Character;
    accepted: boolean;
    rejected: boolean;
}