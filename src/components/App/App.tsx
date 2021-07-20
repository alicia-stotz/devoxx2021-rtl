import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Introduction } from '../routes/introduction/Introduction';


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Introduction}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
