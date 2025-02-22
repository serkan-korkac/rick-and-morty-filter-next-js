// types/Character.ts

export interface Character {
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
  }
  
  export interface CharacterResponse {
    results: Character[];
  }
  