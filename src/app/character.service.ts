import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterURL = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private http: HttpClient) { }


  getList() {

    return this.http.get<any[]>(`${this.characterURL}`)


  }
}
