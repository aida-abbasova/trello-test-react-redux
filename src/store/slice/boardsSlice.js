import { createSlice } from '@reduxjs/toolkit';
import { concat } from 'lodash';


const slice = createSlice({
  name: 'boards',
  initialState: [],
  reducers: {
    addBoards(state, action) {
      const { id, title } = action.payload;
      return concat(state, { id, title })
    
    },
  }
})

export const boardsName = slice.name;
export const boardsReducer = slice.reducer;
export const { addBoards } = slice.actions;
