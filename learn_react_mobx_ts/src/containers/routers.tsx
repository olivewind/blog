import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { history } from '../stores';
import TodoListFnPage from './todo-list-fn';
import RouterDemoPage from './router-demo';
import TodoListClassPage from './todo-list-class';

export default function Routers() {
  return (
    <Router history={history}>
      <div style={{ padding: '10px', borderBottom: '1px solid #F5F5F5' }}>
        <Link to={ROUTES.RouterDemo}>绑定路由</Link>
        <Link to={ROUTES.TodoListFn}>TodoList(Fun)</Link>
        <Link to={ROUTES.TodoListClass}>TodoList(Class)</Link>
      </div>
      <div style={{ padding: '10px' }}>
        <Switch>
          <Route path={ROUTES.Home} exact component={RouterDemoPage} />
          <Route path={ROUTES.TodoListFn} component={TodoListFnPage} />
          <Route path={ROUTES.TodoListClass} component={TodoListClassPage} />
          <Route path={ROUTES.RouterDemo} component={RouterDemoPage} />
          <Route path='*'>
            <Redirect from={ROUTES.Home} to={ROUTES.Home} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
