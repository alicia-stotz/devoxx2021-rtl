import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Navbar } from '../shared/Navbar';
import { SectionList } from '../shared/SectionList';
import { TwitterLink } from '../shared/TwitterLink';

import { Home } from '../routes/Home/Home';
import { Introduction } from '../routes/Introduction/Introduction';
import { Examples } from '../routes/Examples/Examples';
import { Conclusion } from '../routes/Conclusion/Conclusion';
import { Sources } from '../routes/Sources/Sources';
import { PokedexProvider } from '../../contexts/pokedex.context';


const App: React.FC = () => {
  const location = useLocation();

  return (
    <PokedexProvider>
      <div className="App" style={{ height: '100vh' }}>
        <Navbar />
        <div className="row h-100">
          <div className="col-3 py-4 pe-0">
            <SectionList />
          </div>
          <div className="col-9 py-4 bg-light">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/introduction" component={Introduction}></Route>
              <Route path="/examples" component={Examples}></Route>
              <Route path="/conclusion" component={Conclusion}></Route>
              <Route path="/sources" component={Sources}></Route>
            </Switch>
            {location.pathname !== "/" ? <TwitterLink /> : null}
          </div>
        </div>
      </div>
    </PokedexProvider>
  );
}

export default App;
