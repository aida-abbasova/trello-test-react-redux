import { combineReducers,  } from 'redux';
import listReducers from './listReducer';
import cardReducers from './cardReducer';

const reducers =  combineReducers({
    list: listReducers,
    card: cardReducers,
});

export default reducers;