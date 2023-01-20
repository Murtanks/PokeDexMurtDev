import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeDataService } from 'src/app/services/poke-data.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(private pokeDataService: PokeDataService, private activatedRouter: ActivatedRoute){

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {

  }

  getPokemon(id: any){
    this.pokeDataService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      err => {
        console.log(err);
      }
    )
  }

}
