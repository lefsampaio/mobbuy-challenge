import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  character: Array<any>

  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation()
    this.character = nav.extras.state.character
  }

  ngOnInit(): void {
    if (!this.character) {
      this.character = this.dataService.getCharacter()
    }
  }
}
