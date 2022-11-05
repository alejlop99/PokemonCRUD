import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonList } from '../models/pokemons_request';


@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  public baseURL = 'https://pokeapi.co/api/v2';
  URL = 'http://localhost:4000/api/pokemon/'
  constructor(private http:HttpClient) { }
  
  getPokemon(id: string | number){
    return this.http.get<PokemonList>(`${this.baseURL}/pokemon/${id}`)//.pipe(map(response => { return response.results}));
  }

  getPokemonDB():Observable<any> {
    return this.http.get(this.URL);

  }
  AddPokemonDB( Pokemon: any):Observable<any> {
    return this.http.post(this.URL, Pokemon);
  }
  DeletePokemonDB(id:any):Observable<any> {
    return this.http.delete(this.URL+id);
  }
}
