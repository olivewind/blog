import React from 'react';
const { useState, useMemo } = React;

// https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo

// 适用场景：
// 1. 性能优化：减少不必要的重复计算

function getGreetText(name: string) {
  console.log('重新计算');
  return 'hello' + name;
}

// function ChildNormal(props: { name1: string, name2: string }) {
//   // 不管是 name1 还是 name2 变化都会导致重新计算
//   const greet = getGreetText(props.name1);
//   return (
//     <>
//       {greet}
//     </>
//   );
// }

function ChildUseMemo(props: { name1: string, name2: string }) {
  // 只有在 name1 变化时候才会计算
  const greet = useMemo(() => getGreetText(props.name1), [props.name1]);
  console.log('child render');
  return (
    <>
      <br />
      name1: {props.name1}
      <br />
      name2: {props.name2}
      <br />
      greet: {greet}
    </>
  );
}

export default function UseMeno() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  return (
    <div>
      name1:<input type="text" onChange={(e) => setName1(e.target.value)} />
      <br />
      <br />
      name2:<input type="text" onChange={(e) => setName2(e.target.value)} />
      <br />
      <br />
      {/* greet normal:<ChildNormal name1={name1} name2={name2} /> */}
      <br />
      <br />
      greet useMemo:<ChildUseMemo name1={name1} name2={name2} />

    </div>
  );
}
