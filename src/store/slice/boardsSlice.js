import { createSlice } from '@reduxjs/toolkit';
import concat from 'lodash/concat';
import filter from 'lodash/filter';


const slice = createSlice({
  name: 'boards',
  initialState: [],
  reducers: {
    addBoards(state, action) {
      const { id, title } = action.payload;
      return concat(state, { id, title })
    },
    deleteBoard(state, action) {
      const id = action.payload;
      return filter(state, (item) => item.id !== id);
    },
  }
})

export const boardsName = slice.name;
export const boardsReducer = slice.reducer;
export const { addBoards, deleteBoard } = slice.actions;
