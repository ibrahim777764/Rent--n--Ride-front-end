/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loginReducer from './auth/login';
import signUpReducer from './auth/signup';
import vehiclesReducer from './vehicles/vehicles';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
});

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    rootReducer,
  },
});

export default store;
