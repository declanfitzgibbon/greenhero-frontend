export interface Event {
    _id: string,
    eventName: string,
    eventDescription: string,
    src: string;
    openDate: Date;
    boss: Boss;
}
  
export interface Boss {
    _id: string;
    health: number;
    armor: number;
    attack: number;
    healing_factor: number;
    bossName: string;
    bossDescription: string;
    avatar: string;
}