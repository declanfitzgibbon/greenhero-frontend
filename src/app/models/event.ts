export interface Event {
    _id: string,
    name: string,
    description: string,
    src: string;
    date: Date;
    boss: Boss;
}
  
export interface Boss {
    _id: string;
    health: number;
    armor: number;
    attack: number;
    healing_factor: number;
    name: string;
    description: string;
    avatar: string;
}