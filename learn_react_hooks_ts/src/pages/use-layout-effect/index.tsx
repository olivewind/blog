import React from 'react';

const { useState, useLayoutEffect, useEffect } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect

// 适用场景：
// 1. 解决闪烁问题

function Child1() {
  const [value, setValue] = useState(0);

  // 异步更新会出现闪烁
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return (
    <div>
      {value === 0 ? <h1>xiixix</h1> : <h4>value: {value}</h4>}
      <button onClick={() => setValue(0)}>click me</button>
    </div>
  );
}

function Child2() {
  const [value, setValue] = useState(0);

  // 同步更新将不会出现闪烁
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return (
    <div>
      {value === 0 ? <h1>xiixix</h1> : <h4>value: {value}</h4>}
      <button onClick={() => setValue(0)}>click me</button>
    </div>
  );
}
export default function UseLayoutEffect() {
  return (
    <div>
      <Child1 />
      <hr />
      <hr />
      <Child2 />
    </div>
  );
}
