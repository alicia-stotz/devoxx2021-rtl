import React from 'react';

import { IPokemon, PokemonCard } from './PokemonCard';
import { ToolBar } from './ToolBar';
import { SummaryButton } from '../../shared/SummaryButton';

const MINE_POKEMON: IPokemon[] = [];
const POKEMON: IPokemon[] = [
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
]

const SUMMARY_CONTENT: JSX.Element = <div></div>
const TITLE_CONTENT: JSX.Element =
  <div>
    <h3 className="mb-0">Zone de jeu</h3>
    <span className="text-secondary fw-lighter">findby, user event, async</span>
  </div>
export const GameZone = () => {
  return <div className="container row">
    <div className="col-12">
      <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    </div>
    <div className="col-12 mb-3">
      <ToolBar numberOfPokemon={MINE_POKEMON.length} />
    </div>
    {POKEMON.map((pokemon: IPokemon) =>
      <div key={pokemon.id} className="col-6"><PokemonCard pokemon={pokemon} type="Grass" /></div>)}
  </div>
}