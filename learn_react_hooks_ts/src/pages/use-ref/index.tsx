import React, { useEffect, ChangeEvent, useState } from 'react';

const { useRef } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#useref
export default function UseRef() {
  const [num, addNum] = useState(0);
  // 1. 用于获取 DOM 
  const ref1 = useRef<HTMLInputElement>(null);
  // 2. 用作实例属性的存储，useRef 在整个组件生命周期都会保持不变
  const ref2 = useRef<string>('0');

  useEffect(() => {
    console.log('num', ref2.current);
    console.log('ref2.current', ref2.current);
  });

  const onClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    ref1.current?.focus();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    ref2.current = e.target.value
  }

  console.warn('render');
  return (
    <div>
      useRef Demo
      <input ref={ref1} type="text" onChange={onChange} />
      <br />
      <button onClick={onClick}>Focus</button>
      <br />
      <button onClick={() => addNum(num + 1)}>addNum</button>
    </div>
  );
}
