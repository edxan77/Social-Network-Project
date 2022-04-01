import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push({
        ...payload,
        id: nanoid(),
      });
    },
  },
});

export const { addItem } = actions;

export default reducer;
