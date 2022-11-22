/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehicles/vehicles';
import userReducer from "./auth/athuRedecer";

const store = configureStore({
  reducer: {
    userReducer,
    vehicles: vehiclesReducer
  },
});

export default store;
