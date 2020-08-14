
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  { path: '', redirectTo: '/character', pathMatch: 'full' },
  { path: 'character', component: CharactersListComponent },
  { path: 'detalhes', component: DetalhesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
