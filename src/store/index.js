import { configureStore } from '@reduxjs/toolkit';
import counterSlices from './counter/CounterSlices';
import InputSlices from './input/InputSlices';

export const store = configureStore({
  reducer: { counterSlices, InputSlices },
});
