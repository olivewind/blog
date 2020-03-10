import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  UseEffect,
  UseState,
  UseContext,
  UseReducer,
  GlobalState,
  UseCallback,
  UseRef,
  UseLayoutEffect,
  UseImperativeHandle,
  UseMemo,
} from './pages';
import './app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Link to="/useState">useState</Link>
          <Link to="/useEffect">useEffect</Link>
          <Link to="/useContext">useContext</Link>
          <Link to="/useReducer">UseReducer</Link>
          <Link to="/useCallback">UseCallback</Link>
          <Link to="/useMemo">UseMemo</Link>
          <Link to="/useRef">UseRef</Link>
          <Link to="/useLayoutEffect">UseLayoutEffect</Link>
          <Link to="/useImperativeHandle">UseImperativeHandle</Link>
          <Link to="/globalState">GlobalState</Link>
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
            <Route path="/useEffect">
              <UseEffect />
            </Route>
            <Route path="/useContext">
              <UseContext />
            </Route>
            <Route path="/useReducer">
              <UseReducer />
            </Route>
            <Route path="/useCallback">
              <UseCallback />
            </Route>
            <Route path="/useMemo">
              <UseMemo />
            </Route>
            <Route path="/useRef">
              <UseRef />
            </Route>
            <Route path="/useLayoutEffect">
              <UseLayoutEffect />
            </Route>
            <Route path="/useImperativeHandle">
              <UseImperativeHandle />
            </Route>
            <Route path="/globalState">
              <GlobalState />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
