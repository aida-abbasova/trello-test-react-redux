import { 
    addNewList,
    deleteList, 
    getList,
    addNewCard,
    deleteCard,
} from '../actions/actions';

import { handleActions } from 'redux-actions';
import concat from 'lodash/concat';

const initialState = [{
    id: 'list.0',
    cards: ['card.0'],
    title: 'myList',
  }];

  const listReducers = handleActions({
    [addNewList]: (state = initialState, action) => {
        const { id, isNewText } = action.payload;
        const newList = {
          title: isNewText,
          id,
          cards: []
        };
        return [...state, newList];
    },
    [addNewCard]: (state = initialState,action) => {
        const { id, title, listId,}= action.payload;
        const newCard = { id, title, listId };
        const newState = state.map(list => {
          if(list.id === listId) {
            return {
              ...list, cards:[ ...list.cards, newCard]
            } 
          }  else return list;
        });
        return newState;
      },
      [deleteList]: (state, action) => {
        const newState = state.filter(i=> {
          return i.id !== action.payload }) 
        return newState;
    },
    [deleteCard]: (state, action) => {
      const { cardId, listId,}= action.payload;
      console.log(state,'state')
      const newState = state.map(list=> {
        console.log(list,'list')
        if (list.id === listId) {
          return {...list, cards:list.cards.filter(card => card.id !== cardId)}
        }
        return {...list};
      });
      console.log(newState,'newStatenewStatenewState')
      return newState;
  },
    
  }, initialState); 

  export default listReducers;