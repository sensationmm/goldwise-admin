import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice.reducer';

// TODO: Remove the counter reducer
const reducer = {
  counter: counterReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true
});
