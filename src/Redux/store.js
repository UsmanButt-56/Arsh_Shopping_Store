import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './Reducer';

export const store = configureStore({
   reducer : reducers
});