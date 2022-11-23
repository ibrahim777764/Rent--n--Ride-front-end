/* eslint-disable linebreak-style */

import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import carsReducer from './Cars/Cars';
import userReducer from './auth/athuRedecer';

const store = configureStore({
  reducer: {
    userReducer,
    cars: carsReducer,

  },
});

export default store;
