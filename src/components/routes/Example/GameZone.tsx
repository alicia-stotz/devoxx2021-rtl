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

const SUMMARY_CONTENT: JSX.Element = <div>
  <ul>
    <li>
      <h6>
        FireEvent{" "}
        <a href="https://testing-library.com/docs/dom-testing-library/api-events#fireevent">(reference)</a>
      </h6>
      <span>Pour simuler une interraction avec le composant</span>
      <pre className="mt-3"><code>
        <mark>fireEvent.click(...);</mark>
        <mark>fireEvent.change(...)</mark>
      </code></pre>
    </li>
    <li>
      <h6>
        UserEvent{" "}
        <a href="https://testing-library.com/docs/ecosystem-user-event">(reference)</a>
      </h6>
      <span>RTL apporte une extension pour les évènements des utilisateurs : UserEvent. Elle est plus proche du comportement du browser. Mais elle n'inclus pas encore toutes les fonctionnalités de FireEvent </span>
      <pre className="mt-3"><code>
        <mark>userEvent.type(...);</mark>
      </code></pre>
    </li>
    <li>
      <h6>
        FindBy{" "}
        <a href="https://testing-library.com/docs/queries/about#types-of-queries">(reference)</a>
      </h6>
      <span>Utilisé pour les élements de type asynchrone, retourne une Promise</span>
      <pre className="mt-3"><code>
        <mark>await screen.findBy(...);</mark>
      </code></pre>
    </li>
    <li>
      <h6>
        Fonctions assertive{" "}
        <a href="https://testing-library.com/docs/queries/about#types-of-queries">(reference)</a>
      </h6>
      <span>RTL enrichit les fonctions d'assertion déjà disponible dans Jest.</span>
      <ul>
        <li>.toBeDisabled</li>
        <li>.toBeInvalid</li>
        <li>.toHaveClass</li>
        <li>...</li>
      </ul>
    </li>
  </ul>
</div>
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