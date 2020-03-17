import {
  RouterStore as BaseRouterStore,
  syncHistoryWithStore
} from 'mobx-react-router';

import { createHashHistory } from 'history';

export const history = createHashHistory();

export class RouterStore extends BaseRouterStore {
  constructor() {
    super();
    this.history = syncHistoryWithStore(history, this);
  }
}

export const STORE_ROUTER = 'router';
