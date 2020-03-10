import React from 'react';

const { useReducer, createContext, useContext } = React;

type ISizeTypes = 'addWidth' | 'addHeight';
type ISize = { width: number, height: number }

const SizeContext = createContext([
  {
    width: 0,
    height: 0
  },
  a => { }
]) as React.Context<[ISize, (a: { type: ISizeTypes }) => void]>;

const useSize = () => {
  const [size, dispatch] = useContext(SizeContext);
  function addWidth() {
    dispatch({ type: 'addWidth' });
  }
  function addHeight() {
    dispatch({ type: 'addHeight' });
  }
  return { size, addWidth, addHeight };
};


function reducer(state: ISize, action: { type: ISizeTypes }) {
  switch (action.type) {
    case 'addWidth':
      return { ...state, width: state.width + 1 };
    case 'addHeight':
      return { ...state, height: state.height + 1 };
    default:
      throw new Error();
  }
}

function Com1() {
  const { size, addHeight, addWidth } = useSize();
  return (
    <div>
      组件1
      <br />
      宽度: {size.width}
      <br />
      高度: {size.height}
      <br />
      <button onClick={addHeight}>增加高度</button>
      <button onClick={addWidth}>增加宽度</button>
    </div>
  );
}

function Com2() {
  const { size, addHeight, addWidth } = useSize();
  return (
    <div>
      组件2
      <br />
      宽度: {size.width}
      <br />
      高度: {size.height}
      <br />
      <button onClick={addHeight}>增加高度</button>
      <button onClick={addWidth}>增加宽度</button>
    </div>
  );
}

export default function UseReducer() {
  console.warn('render1');
  const sizeContext = useReducer(reducer, { width: 0, height: 0 });
  return (
    <>
      <SizeContext.Provider value={sizeContext}>
        <Com1 />
        <hr />
        <Com2 />
      </SizeContext.Provider>
    </>
  );
}
