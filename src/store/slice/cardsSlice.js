import { createSlice } from '@reduxjs/toolkit';
import { concat } from 'lodash';


const slice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard(state, action) {
      const { listId, id, title } = action.payload;
      return concat(state, { listId ,id, title })
    },
    deleteCard(state, action) {
      const newLists = state.filter(card => card.id !== action.payload); 
      return newLists;
    },
    getCard(state,action) {
      const listId = action.payload;
      return state.filter(card => card.listId === listId);
    },
    deleteListCards(state,action) {
      const listId = action.payload;
      return state.filter(card => card.listId !== listId);
    },
    sortAfterDragAndDropCard(state, action) {
      const {
        droppableIdStart, 
        droppableIdEnd, 
        droppableIndexStart, 
        droppableIndexEnd, 
        droppableId, 
        type,
       } = action.payload;
      if (droppableIdStart === droppableIdEnd) {
         state.find(card => droppableIdStart.slice(4) === card.listId);
         const card = state.splice(droppableIndexStart, 1);
         state.splice(droppableIndexEnd, 0, ...card);
         return state;
       } 
       if (droppableIdStart !== droppableIdEnd) {
        const list = state.find(card => droppableIdStart.slice(4) ===card.listId);	
        list.listId = droppableIdEnd.slice(4);
      }  
       return state;
    }
  }
})

export const cardsName = slice.name;
export const cardsReducer = slice.reducer;
export const { addCard,
               deleteCard, 
               getCard, 
               sortAfterDragAndDropCard, 
               deleteListCards 
              } = slice.actions;
