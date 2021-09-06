import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from '../shared/Navbar';
import { SectionList } from '../shared/SectionList';

import { Introduction } from '../routes/Introduction/Introduction';
import { Examples } from '../routes/Examples/Examples';
import { Sources } from '../routes/Sources/Sources';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App" style={{ height: '100vh' }}>
        <Navbar />
        <div className="row h-100">
          <div className="col-3 py-4 pe-0">
            <SectionList />
          </div>
          <div className="col-9 py-4 bg-light">
            <Switch>
              <Route exact path="/" component={Introduction}></Route>
              <Route path="/examples" component={Examples}></Route>
              <Route path="/sources" component={Sources}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
