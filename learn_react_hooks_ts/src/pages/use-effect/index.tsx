import React from 'react';
const { useState, useEffect } = React;

// https://zh-hans.reactjs.org/docs/hooks-effect.html
// https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/

// 适用场景：
// 1. 模拟钩子函数可以进行清理操作

export default function UseEffect() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // 相当于 componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log('useEffect1');
    return () => {
      console.log('_useEffect1');
    };
  });

  // 相当于 componentDidMount + componentWillUnmount
  // 注意 deps 参数为空数组，不同于不传！！
  useEffect(() => {
    console.log('useEffect2');
    return () => {
      console.log('_useEffect2');
    }
  }, []);


  // 相当于 componentDidMount + componentDidUpdate + componentWillUnmount
  // 相比于第一种情况更加精确
  useEffect(() => {
    console.log('useEffect3');
    return () => {
      console.log('_useEffect3');
    }
  }, [num1]);

  console.warn('render');
  return (
    <div>
      useEffect Demo
      <h4>{num1}</h4>
      <button onClick={() => setNum1(num1 + 1)}>更新 num1</button>
      <br />
      <br />
      <h4>{num2}</h4>
      <button onClick={() => setNum2(num2 + 1)}>更新 num2</button>
    </div>
  );
}
