export type ApocalypseInfo = {
  type: string;
  description: string;
  population: string;
  period: string;
};

export type BunkerInfo = {
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
export type BunkersData = BunkerInfo[];
export type Apocalypses = ApocalypseInfo[];