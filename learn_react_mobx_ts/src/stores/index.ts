
import { createContext, useContext } from 'react';
import { STORE_ROUTER, RouterStore, history } from './router';
import { STORE_TODO, TodoStore } from './todo';

function createStores() {
  return {
    [STORE_TODO]: new TodoStore(),
    [STORE_ROUTER]: new RouterStore(),
  };
}

const stores = createStores();

const StoresContext = createContext(stores);

const useStores = () => useContext(StoresContext);

function useTodoStore() {
  const { todoStore } = useStores();
  return todoStore;
}

function useRouterStore() {
  const { routerStore } = useStores();
  return routerStore;
}

export {
  STORE_TODO,
  STORE_ROUTER,
  RouterStore,
  TodoStore,
  createStores,
  stores,
  StoresContext,
  history,
  useStores,
  useTodoStore,
  useRouterStore,
};