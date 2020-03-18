import React from 'react';
import { ROUTES } from '../../constants';
import { useStores } from '../../stores';

export default function RouterDemoPage() {
  const { routerStore } = useStores();
  return (
    <div>
      <button onClick={() => routerStore.push(ROUTES.TodoListFn)}>Goto Todolist</button>
    </div>
  );
};
