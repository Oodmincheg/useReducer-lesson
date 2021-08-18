import React from 'react';
import useCounter from './useCounter'


export default function Counter() {
  const [state, dispatch] = useCounter()

  return (
    <>
      <div>Count: {state.count}</div>
      <div>DoubleCount: {state.doubleCount}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'doubleIncrement' })}>+2</button>
      <button onClick={() => dispatch({ type: 'doubleDecrement' })}>-2</button>
    </>
  );
}
