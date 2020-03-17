
import { STORE_ROUTER, RouterStore, history } from './router';
import { STORE_TODO, TodoStore } from './todo';

function createStores() {
  return {
    [STORE_TODO]: new TodoStore(),
    [STORE_ROUTER]: new RouterStore(),
  };
}

export {
  STORE_ROUTER,
  RouterStore,
  createStores,
  history
};