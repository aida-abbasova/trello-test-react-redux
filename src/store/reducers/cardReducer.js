import { 
    addNewCard,
    deleteCard, 
} from '../actions/actions';
import { handleActions } from 'redux-actions';
import concat from 'lodash/concat';

const initialState = [{
        id: 101,
        title: 'cardText10',
    } , {
    id: 111,
    title: 'cardText11',
    }
    ]
;

  const cardReducers = handleActions({
    [addNewCard]: (state = initialState,action) => {
        const newCard = action.payload;
        return concat(...state || [], [newCard]);
    },
    // [getList]: (state = initialState) => {
    //     return state;
    // },
    
  }, initialState); 

  export default cardReducers;