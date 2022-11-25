import { configureStore } from '@reduxjs/toolkit';
import carsSliceReducer from './Cars/Cars';

const store = configureStore({
  reducer: {
    cars: carsSliceReducer,
  },
});

export default store;
