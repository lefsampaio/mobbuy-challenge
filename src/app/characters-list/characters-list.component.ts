import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Array<any>
  originalCharacters: Array<any>
  houseSelected = "0"
  houses: Array<any>

  constructor(private characterService: CharacterService, private router: Router) { }

  getList() {
    this.characterService.getList().subscribe(data => {
      this.characters = data;
      this.originalCharacters = data;
      this.houses = data;

      this.houses = this.houses.reduce((unico, item) => {
        return unico.includes(item.house) ? unico : [...unico, item.house]
      }, []);
    });

  }

  ngOnInit() {
    this.getList();
  }

  goToDetailsByState(character: Array<any>) {
    this.router.navigateByUrl('detalhes', { state: { character: character } })
  }

  onChange(selectValue) {
    if (selectValue === "0") {
      this.characters = this.originalCharacters;
    } else {
      this.characters = this.originalCharacters.filter(h => h.house === selectValue)
    }


  }


}
