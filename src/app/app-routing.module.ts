import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list_pkm'},
  {path:'add_pkm',component:ListPokemonsComponent},
  {path:'list_pkm',component:ListPokemonsComponent},
  { path: '**',pathMatch:'full',redirectTo:'list_pkm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
