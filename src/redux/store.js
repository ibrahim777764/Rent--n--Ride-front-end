
import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/Cars';
import userReducer from "./auth/athuRedecer";

const store = configureStore({
  reducer: {
    userReducer,
    cars: carsReducer,

  },
});

export default store;
