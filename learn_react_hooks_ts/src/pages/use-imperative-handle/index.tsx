import React from 'react';
const { useRef, useImperativeHandle, forwardRef } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle
// 适用场景: ref 转发时候代理一层，做 API 的上层封装

interface IChildRef {
  getHeight(): number;
}

const Child = forwardRef((props: {}, ref: React.Ref<IChildRef>) => {
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    getHeight: () => {
      console.log('计算了高度');
      // inputRef.urrent.focus();
      return divRef.current?.clientHeight || 0;
    }
  }));

  return (
    <div ref={divRef} style={{ height: '100px', width: '100px', border: '1px solid #000' }}>
      i am child
    </div>
  );
});

export default function UseImperativeHandle() {
  const childRef = useRef<IChildRef>(null);

  function getChildHeight() {
    console.log(childRef.current?.getHeight());
  }

  return (
    <div>
      useImperativeHandle Demo
      <Child ref={childRef} />
      <button onClick={getChildHeight}>click me</button>
    </div>
  );
}
