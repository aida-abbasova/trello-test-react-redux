import { createSlice } from '@reduxjs/toolkit';
import concat from 'lodash/concat';
import filter from 'lodash/filter';

const slice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    addList(state, action) {
      const { boardId, id, title } = action.payload;
      return concat(state, { boardId, id, title });
    },
    deleteList(state, action) {
      const newLists = state.filter(list => list.id !== action.payload); 
      return newLists;
    },
    getList(state,action) {
      const boardId = action.payload;
      return state.filter(list => list.boardId === boardId);
    },
    deleteBoardsList(state,action) {
      const boardId = action.payload;
      return filter(state, (item) => item.boardId !== boardId);;
    },
    sortAfterDragAndDrop(state, action) {
      const {
        droppableIdStart, 
        droppableIdEnd, 
        droppableIndexStart, 
        droppableIndexEnd, 
        droppableId, 
        type,
       } = action.payload;
       const newState= [...state];
       if(type === 'list') {
         const list = newState.splice(droppableIndexStart, 1);
         newState.splice(droppableIndexEnd, 0, ...list);
         return newState;
       }
       return newState;
    }
  }
})

export const listsName = slice.name;
export const listsReducer = slice.reducer;
export const { addList, 
               deleteList, 
               getList, 
               sortAfterDragAndDrop, 
               deleteBoardsList, 
              } = slice.actions;
