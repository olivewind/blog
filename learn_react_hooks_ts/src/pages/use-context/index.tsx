import React, { useContext } from 'react';

const { useState, createContext } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext

// 适用场景：
// 1. 状态共享

// 唯一需要注意的是：
// 当组件上层最近的 <SizeContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 SizeContext provider 的 context value 值。
// 即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

const SizeContext = createContext({
  size: 0,
  // 给子组件更改 context value 值暴露接口
  setSize(size: number) { console.log(size) },
});


function ChildCom() {
  const { size, setSize } = useContext(SizeContext);

  function updatSize() {
    setSize(size + 1);
  }
  console.warn('child srender');
  return (
    <div>
      <h4>子组件 size:{size}</h4>
      <button onClick={updatSize}>累加</button>
    </div>
  )
}

export default function UseContext() {
  const [size, setSize] = useState(0);
  console.warn('father render');
  const value = {
    size,
    setSize
  }
  return (
    <div>
      <SizeContext.Provider value={value}>
        <h4>根组件 size:{size}</h4>
        <ChildCom />
      </SizeContext.Provider>
    </div >
  );
}
