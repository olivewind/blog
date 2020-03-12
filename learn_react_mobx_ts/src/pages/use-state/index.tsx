import React from 'react';

const { useState } = React;

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
