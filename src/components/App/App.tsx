import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from '../shared/Navbar';
import { SummaryList } from '../shared/SummaryList';

import { Introduction } from '../routes/introduction/Introduction';


const App: React.FC = () => {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <Navbar />
      <div className="row h-100">
        <div className="col-3 py-4 ">
          <SummaryList />
        </div>
        <div className="col-9 py-4 bg-light">
          <Router>
            <Switch>
              <Route exact path="/" component={Introduction}></Route>
            </Switch>
          </Router>
        </div>
      </div>

    </div>
  );
}

export default App;