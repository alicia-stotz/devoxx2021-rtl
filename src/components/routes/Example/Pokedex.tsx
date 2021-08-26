import React from 'react';

import { IPokemon, PokemonCard } from './PokemonCard';
import { SummaryButton } from '../../shared/SummaryButton';

const POKEMON: IPokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    order: 1,
    weight: 69,
    base_experience: 64,
    types: [
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
      },
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
      }
    ]
  },
  {
    id: 16,
    name: "pidgey",
    height: 3,
    order: 21,
    weight: 18,
    base_experience: 50,
    types: [
      {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/"
      },
      {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/"
      }
    ]
  },
  {
    id: 10,
    name: "caterpie",
    height: 3,
    order: 14,
    weight: 29,
    base_experience: 39,
    types: [
      {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/"
      }
    ]
  }
];

const SUMMARY_CONTENT: JSX.Element = <div></div>
export const Pokedex = () => {
  return <div className="container row">
    <SummaryButton content={SUMMARY_CONTENT} />
    {POKEMON.map((pokemon: IPokemon) =>
      <div key={pokemon.id} className="col-6"><PokemonCard pokemon={pokemon} type="Mine" /></div>)}
  </div>
}