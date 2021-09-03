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
  }
];

const SUMMARY_CONTENT: JSX.Element = <div></div>
const TITLE_CONTENT: JSX.Element =
  <div>
    <h3 className="mb-0">Card Pokemon</h3>
    <span className="text-secondary fw-lighter">getBy, queryBy</span>
  </div>
export const DefaultPokemonCard = () => {
  return <div className="container row">
    <div className="col-12">
      <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    </div>
    {POKEMON.map((pokemon: IPokemon) =>
      <div key={pokemon.id} className="col-6"><PokemonCard pokemon={pokemon} /></div>)}
  </div>
}