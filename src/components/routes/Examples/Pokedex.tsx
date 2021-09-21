import React from 'react';

import { PokemonCard } from './PokemonCard';
import { SummaryButton } from '../../shared/SummaryButton';

import { PokedexContext, IPokemon } from '../../../contexts/pokedex.context';

const SUMMARY_CONTENT: JSX.Element = <div>
  <ul>
    <li>
      <h6>
        Sélectionner plusieurs éléments{" "}
        <a href="https://testing-library.com/docs/queries/about#types-of-queries">(reference)</a>
      </h6>
      <pre className="mt-3"><code>
        <mark>screen.getAllByRole(...);</mark>
        <mark>screen.queryAllByText(...);</mark>
      </code></pre>
    </li>
    <li>
      <h6>
        Sélectionner un élément{" "}
        <a href="https://testing-library.com/docs/queries/about#priority">(reference)</a>
      </h6>
      <span>RTL dispose de plusieurs fonctions de selection</span>
      <pre className="mt-3"><code>
        <mark>screen.getByTitle(...);</mark>
      </code></pre>
      <ul>
        <li>Role : getByRole</li>
        <li>LabelText : getByLabelText</li>
        <li>PlaceholderText : getByPlaceholderText</li>
        <li>AltText : getByAltText</li>
        <li>Title : getByTitle</li>
        <li>DisplayValue : getByDisplayValue</li>
      </ul>
    </li>
  </ul>
</div>
const TITLE_CONTENT: JSX.Element =
  <div>
    <h3 className="mb-0">Mon Pokedex</h3>
    <span className="text-secondary fw-lighter">getAll, type de recherche</span>
  </div>
export const Pokedex = () => {
  const { pokemon, removePokemon } = React.useContext(PokedexContext);

  return <div className="container row">
    <div className="col-12">
      <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    </div>
    {pokemon.map((item: IPokemon) =>
      <div key={item.id} className="col-12 col-lg-6">
        <PokemonCard pokemon={item} type="Mine" removeFct={removePokemon} />
      </div>
    )}
  </div>
}