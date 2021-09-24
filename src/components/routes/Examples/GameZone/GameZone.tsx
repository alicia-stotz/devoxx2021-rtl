import React from 'react';

import { PokedexContext, IPokemon } from '../../../../contexts/pokedex.context';

import { PokemonCard } from '../PokemonCard';
import { ToolBar } from './ToolBar';
import { Finder } from './Finder';
import { SummaryButton } from '../../../shared/SummaryButton';
import { NotificationType, useNotification } from '../../../shared/Notification';

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
  </ul>
</div>
const TITLE_CONTENT: JSX.Element =
  <div>
    <h3 className="mb-0">Zone de jeu</h3>
    <span className="text-secondary fw-lighter">user event, findBy, async</span>
  </div>
export const GameZone = () => {
  const [pokeball, setPokeball] = React.useState<number>(0);
  const [dollar, setDollar] = React.useState<number>(3000);
  const { pokemon, addPokemon, freePokemon, removeFreePokemon, addFreePokemon } = React.useContext(PokedexContext);
  const { addNotification } = useNotification();

  const addFct = () => {
    if (Date.now() % 2 === 0 && freePokemon !== null) {
      addPokemon(freePokemon);
      addNotification(NotificationType.SUCCESS, `Le Pokemon ${freePokemon.name} a été ajouté au Pokedex`);
      removeFreePokemon();
    } else {
      addNotification(NotificationType.ERROR, 'Le Pokemon n\'a pas été attrapé');
    }
    setPokeball(pokeball - 1);
  }

  return <div className="container row">
    <div className="col-12">
      <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    </div>
    <div className="col-12 mb-3">
      <ToolBar
        numberOfPokeball={pokeball}
        numberOfDollar={dollar}
        numberOfPokemon={pokemon.length}
        setNumberOfDollar={(remaningDollar: number) => setDollar(remaningDollar)}
        setNumberOfPokeball={(pokeballNumber: number) => setPokeball(pokeballNumber)}
      />
    </div>
    {!freePokemon && <hr />}
    <div className="col-12 col-lg-6">
      {
        freePokemon ?
          <PokemonCard
            pokemon={freePokemon}
            type="Grass"
            pokeball={pokeball > 0}
            addFct={addFct} />
          : <Finder setPokemon={(newPokemon: IPokemon) => addFreePokemon(newPokemon)} />
      }
    </div>
  </div>
}