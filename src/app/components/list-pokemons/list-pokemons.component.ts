import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';
import { PokemonList } from '../../models/pokemons_request';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  public Pokemon_data: any = [];
  public data: any[] = [];
  constructor(private pokemonService: ApiPokemonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.listPokemons()
  }

  listPokemons(){
    this.pokemonService.getPokemonDB().subscribe({
    next:(resp) =>{
      this.data= resp;
    },
    error:(err) => {
      console.log(err);
    }
  })
  /*for (let i = 1; i <= 20; i++) {
    
    this.pokemonService.getPokemon(i).subscribe({
      next:(resp) =>{ 
        this.Pokemon_data = {
          id: resp.id,
          image: resp.sprites.other?.dream_world.front_default,
          name: resp.name,
          type: resp.types,
          stats: resp.stats
        }
        //this.AddPokemon(this.Pokemons_data);
        console.log(this.data);
        this.data.push(this.Pokemon_data);

    },
    error:(err) => {

      console.log(err)
    }
    });
  }*/
  /*this.pokemonService.getPokemonDB().subscribe({
    next:(resp) =>{
      console.log(resp);
    },
    error:(err) => {
      console.log(err);
    }
  })*/
  }

  DeletePokemon(id:any){

    this.pokemonService.DeletePokemonDB(id).subscribe( {
      next:(resp) =>{
        this.listPokemons();
      }
    });
  }

}
