import React from 'react';

const { useReducer } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer

// 适用场景；
// 1. 复杂的数据类型，需要差量更新
// 2. 可以获取到上一次的数据
// 3. 性能优化：稳定的 dispatch 句柄

function reducer(state: { count: number }, action: { type: 'increment' | 'decrement' }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  console.warn('render1');
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
