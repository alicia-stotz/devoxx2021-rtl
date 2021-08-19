import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from '../shared/Navbar';
import { SectionList } from '../shared/SectionList';

import { Introduction } from '../routes/Introduction/Introduction';
import { Example } from '../routes/Example/Example';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App" style={{ height: '100vh' }}>
        <Navbar />
        <div className="row h-100">
          <div className="col-3 py-4" style={{ paddingRight: 0 }}>
            <SectionList />
          </div>
          <div className="col-9 py-4 bg-light">
            <Switch>
              <Route exact path="/" component={Introduction}></Route>
              <Route path="/example" component={Example}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
