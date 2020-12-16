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
    sortAfterDragAndDropCard(state, action) {
      const {
        droppableIdStart, 
        droppableIdEnd, 
        droppableIndexStart, 
        droppableIndexEnd, 
        droppableId, 
        type,
       } = action.payload;
       const newState= [...state];
       console.log(droppableIdStart.slice(4),droppableIdStart)
       if (droppableIdStart === droppableIdEnd) {
         state.find(cards => droppableIdStart === cards.listId);
         const card = state.splice(droppableIndexStart, 1);
         state.splice(droppableIndexEnd, 0, ...card);
       } 
       if (droppableIdStart !== droppableIdEnd) {
         //todo
        //  const findCard = state.find(cards => droppableIndexStart === cards.listId);
        //  const card = findCard.splice(droppableIndexStart, 1);
        //  //card.listId = droppableIdEnd;
        //  const newList = state.find(cards => droppableIdEnd === cards.listId);
        //  newList.splice(droppableIndexEnd, 0, ...card);
       }  
       return newState;
    }
  }
})

export const cardsName = slice.name;
export const cardsReducer = slice.reducer;
export const { addCard, deleteCard, getCard, sortAfterDragAndDropCard } = slice.actions;
