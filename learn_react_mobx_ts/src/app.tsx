import React from 'react';
import { Provider } from 'mobx-react';
import Routers from './containers/routers';
import { createStores } from './stores';
import './app.css';

const rootStore = createStores();

function App() {
  return (
    <Provider {...rootStore}>
      <Routers />
    </Provider>
  );
}

export default App;
