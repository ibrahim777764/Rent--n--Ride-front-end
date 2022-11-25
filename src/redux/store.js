/* eslint linebreak-style: ["error", "windows"] */
import { configureStore } from '@reduxjs/toolkit';
import vehiclesSlice from './vehicles/vehicles';
import userSlice from './user/user';
import bookingsSlice from './booking/booking';

const store = configureStore({
  reducer: {
    vehicles: vehiclesSlice,
    user: userSlice,
    bookings: bookingsSlice,
  },
});

export default store;
