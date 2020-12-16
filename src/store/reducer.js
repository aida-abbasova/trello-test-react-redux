import { combineReducers } from '@reduxjs/toolkit';
import { boardsReducer, boardsName } from './slice/boardsSlice';
import { listsReducer, listsName } from './slice/listsSlice';
import { cardsReducer, cardsName } from './slice/cardsSlice';

const rootReducer =  combineReducers({
    [boardsName]: boardsReducer,
    [listsName]: listsReducer,
    [cardsName]: cardsReducer,
});

export default rootReducer;