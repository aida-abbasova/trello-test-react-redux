import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer';

const store = configureStore({
  reducer:rootReducer,
}
  //, loadFromLocalStorage()
  );

//store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;