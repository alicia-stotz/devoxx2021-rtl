import { Redirect, Route, Switch } from 'react-router-dom';

import { DefaultPokemonCard } from './DefaultPokemonCard';
import { Pokedex } from './Pokedex';
import { GameZone } from './GameZone';

export const Examples = () => {
  return <div className="example-page">
    <Switch>
      <Route path="/examples/default" component={DefaultPokemonCard} />
      <Route path="/examples/pokedex" component={Pokedex} />
      <Route path="/examples/gameZone" component={GameZone} />
      <Redirect to="/examples/default" />
    </Switch>
  </div>
}