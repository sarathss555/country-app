import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import countriesReducer from './reducers/countriesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  countries: countriesReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;