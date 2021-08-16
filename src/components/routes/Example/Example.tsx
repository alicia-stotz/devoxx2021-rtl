import React from 'react';
import { IPokemon, PokemonCard } from './PokemonCard';

const POKEMON: IPokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    order: 1,
    weight: 69,
    base_experience: 64
  },
  {
    id: 4,
    name: "charmander",
    height: 6,
    order: 5,
    weight: 85,
    base_experience: 64
  }
];

export const Example = () => {
  return <div className="container row">
    {POKEMON.map((pokemon: IPokemon) =>
      <div key={pokemon.id} className="col-6">{PokemonCard(pokemon, "Mine")}</div>)}
  </div>
}