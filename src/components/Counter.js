import React, { useContext } from 'react';
import useCounter from './useCounter'
import {CounterContext, UserContext} from './userContext'

export default function Counter() {

  const [state, dispatch] = useCounter()

  const {user} = useContext(UserContext)
  const {counter, setCounter} = useContext(CounterContext)
  console.log('user in counter ===> ', user)
  if(!user) return null

  return (
    <>
      <div>Count: {state.count}</div>
      <div>DoubleCount: {state.doubleCount}</div>
      <button onClick={() => {dispatch({ type: 'increment' }); setCounter(counter+1)}}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'doubleIncrement' })}>+2</button>
      <button onClick={() => dispatch({ type: 'doubleDecrement' })}>-2</button>
      <div>User in counter: {user}</div>
    </>
  );
}
