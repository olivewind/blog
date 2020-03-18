import React from 'react';
import { Provider } from 'mobx-react';
import Routers from './containers/routers';
import { stores, StoresContext } from './stores';
import './app.css';

function App() {
  return (
    <Provider {...stores}>
      <StoresContext.Provider value={stores}>
        <Routers />
      </StoresContext.Provider>
    </Provider>
  );
}

export default App;
