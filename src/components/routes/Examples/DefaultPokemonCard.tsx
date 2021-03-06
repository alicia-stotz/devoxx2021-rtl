import { PokemonCard } from './PokemonCard';
import { SummaryButton } from '../../shared/SummaryButton';

import { POKEMON, IPokemon } from '../../../contexts/pokedex.context';

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
  </ul>
</div>
const TITLE_CONTENT: JSX.Element =
  <div>
    <h3 className="mb-0">Carte Pokemon</h3>
    <span className="text-secondary fw-lighter">render, screen, getBy</span>
  </div>
export const DefaultPokemonCard = () => {
  return <div className="container row">
    <div className="col-12">
      <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    </div>
    {POKEMON.map((pokemon: IPokemon) =>
      <div key={pokemon.id} className="col-12 col-lg-6">
        <PokemonCard pokemon={pokemon} />
      </div>
    )}
  </div>
}