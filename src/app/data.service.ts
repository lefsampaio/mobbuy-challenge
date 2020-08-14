import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public character: Array<any>
  constructor() { }

  setCharacter(character: Array<any>) {
    this.character = character
  }

  getCharacter() {
    return this.character;
  }
}
