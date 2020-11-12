export interface Mission {
    _id: string;
    title: string;
    description: string;
    value: number;
    goal: number;
    reward: number;
    image: string;
    deleted: boolean;
    type: string
    user_id: string;
    completed: boolean;
    openDate: Date;
  }