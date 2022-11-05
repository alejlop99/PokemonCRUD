import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';
import { ListPokemonsComponent } from 'src/app/components/list-pokemons/list-pokemons.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  search: FormGroup;
  onSearch: boolean= false;
  public Pokemon_data: any = [];
  constructor(public formPokemon:FormBuilder, private pokemonService: ApiPokemonService, public list:ListPokemonsComponent ,public router:Router) { 
    this.search=this.formPokemon.group({
    PokeSearch:['']
    });
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/list_pkm/1',{ skipLocationChange: true });
  }

  onSearchPokemon(): void {
  var value = this.search.value.PokeSearch;
  value = value.toLowerCase();
  this.onSearch = true;
  if(value === '') {

  } else {

    this.pokemonService.getPokemon(value).subscribe({
      next:(resp) =>{ 
        this.Pokemon_data = {
          id: resp.id,
          image: resp.sprites.other?.dream_world.front_default,
          name: resp.name,
          type: resp.types,
          stats: resp.stats
        }
        console.log(this.Pokemon_data);
    },
    error:(err) => {

      console.log(err)
    }
    });
    }
  }

  AddPokemon_toDB(){
    this.pokemonService.AddPokemonDB(this.Pokemon_data).subscribe({
      next:(response) =>{
        //this.list.ngOnInit();
        this.router.navigateByUrl('/add_pkm', { skipLocationChange: true }).then(() => {
          this.router.navigate(['list_pkm']);
}); 
      },
      error:(err) => {
        console.log(err);
      }
    });
  }
}
