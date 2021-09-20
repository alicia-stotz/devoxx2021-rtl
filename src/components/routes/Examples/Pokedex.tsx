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
  }
];

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
  const [pokemon, setPokemon] = React.useState<IPokemon[]>(POKEMON);

  const removePokemon = (id: number) => {
    const initialArray = [...pokemon];
    const findPokemonIndex = initialArray.findIndex((p: IPokemon) => p.id === id);
    if (findPokemonIndex > -1) {
      initialArray.splice(findPokemonIndex, 1)
      setPokemon(initialArray);
    }
  }

  return <div className="container row">
    <div className="col-12">
      <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    </div>
    {pokemon.map((item: IPokemon) =>
      <div key={item.id} className="col-6">
        <PokemonCard pokemon={item} type="Mine" removeFct={removePokemon} />
      </div>
    )}
  </div>
}