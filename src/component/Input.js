import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateText } from '../store/input/InputSlices';

const Input = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.InputSlices.input);

  return (
    <div>
      <input
        value={input}
        placeholder='ingresa un texto'
        type='text'
        onChange={(e) => dispatch(updateText(e.target.value))}
      />
    </div>
  );
};

export default Input;
