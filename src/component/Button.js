import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counter/CounterSlices';

const Button = ({ children }) => {
  const dispatch = useDispatch();
  function handleclick() {
    if (children === 'increment') {
      dispatch(increment());
    }
    if (children === 'decrement') {
      dispatch(decrement());
    }
  }
  return (
    <div>
      <button onClick={handleclick}>{children}</button>
    </div>
  );
};

export default Button;
