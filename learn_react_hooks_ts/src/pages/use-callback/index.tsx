import React, { useCallback } from 'react';

const { useState, memo } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback

// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

// 适用场景：
// 1. 性能优化：将句柄传入做了 memo 的子组件

interface IChildProps {
  count: number;
  onAdd(): void;
}

const Child1 = memo(function (props: IChildProps) {
  console.log('Child1 Render');
  return (
    <div style={{ border: '1px solid #000' }}>
      <h4>Child1</h4>
      count:{props.count}
      <button onClick={props.onAdd}>add</button>
    </div>
  );
});

const Child2 = memo(function (props: IChildProps) {
  console.log('Child2 Render');
  return (
    <div style={{ border: '1px solid #000' }}>
      <h4>Child2</h4>
      count:{props.count}
      <button onClick={props.onAdd}>add</button>
    </div>
  );
});

export default function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const onAddCount1 = () => {
    setCount1(count1 + 1);
  }

  // 标记是稳定的，count1 变化不会影响 Child2 的渲染
  const onAddCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log('Wrap Renders');
  return (
    <div>
      <Child1 count={count1} onAdd={onAddCount1} />
      <br />
      <Child2 count={count2} onAdd={onAddCount2} />
    </div>
  );
}
