import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { DefaultPokemonCard } from './DefaultPokemonCard';
import { Pokedex } from './Pokedex';
import { GameZone } from './GameZone';

export const Example = () => {
  return <div className="example-page">
    <Switch>
      <Route path="/example/default" component={DefaultPokemonCard} />
      <Route path="/example/pokedex" component={Pokedex} />
      <Route path="/example/gameZone" component={GameZone} />
      <Redirect to="/example/default" />
    </Switch>
  </div>
}