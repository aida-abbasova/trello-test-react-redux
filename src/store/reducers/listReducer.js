import { 
    addNewList,
    deleteList, 
    getList,
} from '../actions/actions';

import { handleActions } from 'redux-actions';
import concat from 'lodash/concat';

const initialState = [{
        id: 1,
        title: 'ok',
        cards: [
        {
        id: 10,
        title: 'cardText10',
        } , {
        id: 11,
        title: 'cardText11',
        }]
    }, {
    id: 2,
    title: 'ok2',
    cards: 
    [{
        id: 101,
        title: 'cardText10',
    } , {
    id: 111,
    title: 'cardText11',
    }
    ]
}];

  const listReducers = handleActions({
    // [addNewList]: (state = initialState,action) => {
    //     const newList = action.payload;
    //     return concat(...state || [], [newList]);
    // },
    // [getList]: (state = initialState) => {
    //     return state;
    // },
    
  }, initialState); 

  export default listReducers;