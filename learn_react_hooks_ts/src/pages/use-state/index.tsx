import React from 'react';

const { useState } = React;


// https://zh-hans.reactjs.org/docs/hooks-state.html

// useState 是最简单的一个 hook
// 1. 唯一需要注意的是不要尝试在循环 2. 条件等不稳定的代码结构中编写
// 原因在这里 -> https://github.com/brickspert/blog/issues/26

export default function UseState() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  console.warn('render');
  return (
    <div>
      useState Demo
      <h4>num1:{num1}</h4>
      <h4>num2:{num2}</h4>
      <button onClick={() => setNum1(num1 + 1)}>add num1</button>
      <button onClick={() => setNum2(n => n + 1)}>add num2</button>
    </div>
  );
}
