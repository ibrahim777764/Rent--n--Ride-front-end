import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/Cars';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
