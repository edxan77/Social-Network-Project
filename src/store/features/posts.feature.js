/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const { actions, reducer } = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.posts.push({
        ...payload,
        id: nanoid(),
      });
    },
  },
});

export const { addItem } = actions;

export default reducer;
