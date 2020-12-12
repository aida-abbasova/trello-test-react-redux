import { createActions } from 'redux-actions';

import {
  ADD_NEW_LIST,
  ADD_NEW_CARD,
  ADD_NEW_BOARD,
  DELETE_LIST,
  DELETE_CARD,
  DELETE_BOARD,
  GET_LIST,
} from '../constants';

export const {
    addNewList,
    addNewCard,
    addNewBoard,
    deleteList,
    deleteCard,
    deleteBoard,
    getList,

} = createActions(
    ADD_NEW_LIST,
    ADD_NEW_CARD,
    ADD_NEW_BOARD,
    DELETE_LIST,
    DELETE_CARD,
    DELETE_BOARD,
    GET_LIST,
);