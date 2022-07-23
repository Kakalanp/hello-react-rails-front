import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from './welcome/reducer';

const store = configureStore({ reducer: welcomeReducer });

export default store;
