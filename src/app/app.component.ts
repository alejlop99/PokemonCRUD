import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { ListPokemonsComponent } from 'src/app/components/list-pokemons/list-pokemons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonCRUD';
  constructor(public dialog: MatDialog, public list:ListPokemonsComponent,  public router:Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddPokemonComponent);
    //this.router.navigate(['/add_pkm']);
    dialogRef.afterClosed().subscribe(result => {
      this.list.listPokemons();
      console.log('result');
    });
  }
}
