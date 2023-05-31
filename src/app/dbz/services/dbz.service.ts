import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 700,
    },
  ];

  addCharacter(character: Character): void {
    const newcharacter: Character = {
      id: uuid(),
      ...character,
    };
    //console.log(character);
    this.characters.push(character);
  }

  /* onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  } */

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
