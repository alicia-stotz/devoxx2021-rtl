import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { DefaultPokemonCard } from './DefaultPokemonCard';

export const Example = () => {
  return <div className="example-page">
    <Switch>
      <Route path="/example/default" component={DefaultPokemonCard} />
      <Redirect to="/example/default" />
    </Switch>
  </div>
}