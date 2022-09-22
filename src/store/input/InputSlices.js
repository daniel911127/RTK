import { createSlice } from '@reduxjs/toolkit';

const initialState = { input: '' };

const inputSlices = createSlice({
  name: 'texts',
  initialState,
  reducers: {
    updateText: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { updateText } = inputSlices.actions; //destructuring

export default inputSlices.reducer;
