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

const SUMMARY_CONTENT: JSX.Element = <div>
  <ul>
    <li>
      <h6>
        Rendre un composant{" "}
        <a href="https://testing-library.com/docs/react-testing-library/api#render">(reference)</a>
      </h6>
      <span>RTL est utilisée pour interagire avec le composant comme un utilisateur le ferait</span>
      <pre className="mt-3"><code>
        <mark>render(monComposant);</mark>
      </code></pre>
    </li>
    <li>
      <h6>
        Acceder au composant et l'afficher{" "}
        <a href="https://testing-library.com/docs/queries/about#screen">(reference)</a></h6>
      <pre className="mt-3"><code>
        <mark>screen.debug();</mark>
      </code></pre>
    </li>
    <li>
      <h6>
        Sélectionner un élément{" "}
        <a href="https://testing-library.com/docs/queries/about#priority">(reference)</a>
      </h6>
      <span>Après avoir rendu le composant - RTL offre differentes fonctions de recherche</span>
      <pre className="mt-3"><code>
        <mark>screen.getByText(...);</mark>
        <mark>screen.getByRole(...);</mark>
      </code></pre>
    </li>
    <li className="mt-3">
      <h6>
        Chercher un élément{" "}
        <a href="https://testing-library.com/docs/queries/about#types-of-queries">(reference)</a>
      </h6>
      <pre className="mt-3"><code>
        <mark>screen.queryByText(...);</mark>
      </code></pre>
    </li>
  </ul>
</div>
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