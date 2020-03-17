import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import TodoListPage from './todo-list';
import { ROUTES } from '../constants';
import { history } from '../stores';

export default function Routers() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={ROUTES.Home} exact component={TodoListPage} />
        <Route path={ROUTES.TodoList} component={TodoListPage} />
        <Route path='*'>
          <Redirect from={ROUTES.Home} to={ROUTES.Home} />
        </Route>
      </Switch>
    </Router>
  );
}
