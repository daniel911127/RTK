import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const value = useSelector((state) => state.counterSlices.counter);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default Counter;
