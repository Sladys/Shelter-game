export type Apocalypse = {
  type: string;
  description: string;
  population: string;
  period: string;
};

export type BunkerData = {
  description: string;
  food: string;
  structure: string;
  additional: string;
};

export type CardInfo = {
  profession: string;
  bio: string;
  hobby:string;
  inventory: string;
  phobia: string;
  health: string;
  additional: string;
  actionFirst: string;
  actionSecond: string;
  id: string;
  order: string;
}; 

export type CardsInfo = CardInfo[];
export type BunkersData = BunkerData[];
export type Apocalypses = Apocalypse[];