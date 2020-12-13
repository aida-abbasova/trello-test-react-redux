import { combineReducers,  } from 'redux';
import listReducers from './listReducer';

const reducers =  combineReducers({
    list: listReducers,
});

export default reducers;