import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  UseState,
} from './pages';
import './app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Link to="/useState">useState</Link>
        </header>
        <hr />
        <main style={{ padding: '20px' }}>
          <Switch>
            <Route exact path="/">
              <UseState />
            </Route>
            <Route path="/useState">
              <UseState />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
