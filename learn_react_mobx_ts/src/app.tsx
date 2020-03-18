import React from 'react';
import { Provider } from 'mobx-react';
import Routers from './containers/routers';
import { stores, StoresContext } from './stores';
import './app.css';

function App() {
  return (
    // 服务类组件
    <Provider {...stores}>
      {/* 服务函数组件 */}
      <StoresContext.Provider value={stores}>
        <Routers />
      </StoresContext.Provider>
    </Provider>
  );
}

export default App;
