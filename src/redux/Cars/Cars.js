import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const url = 'https://protected-sea-38971.herokuapp.com/api/v1/cars/';

// Actions
const GET_CARS = 'redux/Cars/Cars/GET_CARS';
const POST_CAR = 'redux/Cars/Cars/POST_CAR';
const DELETE_CAR = 'redux/Cars/Cars/DELETE_CAR';

// Create ASYNC Thunks
export const loadCarsThunk = createAsyncThunk(GET_CARS, async () => {
  const response = await axios.get(url).catch((err) => {
    console.log('Error', err);
  });
  const res = response.data
  return res;
});

export const addCarThunk = createAsyncThunk(POST_CAR, async (
  { name, image, description, price, location, duration },
  thunkAPI,
) => {
  const car = {
    name,
    image,
    description,
    price,
    location,
    duration,
  };
  // fetch cars
  await axios.post(url, car)
    .then(() => thunkAPI.dispatch(loadCarsThunk()))
    .catch((err) => { console.log('Error', err); });

  const cars = thunkAPI.getState().carsList;
  return cars;
});

// Reducer
const CarsSlice = createSlice({
  name: 'rent-n-ride/carsReducer',
  initialState: [],
  extraReducers: {
    [loadCarsThunk.fulfilled]: (state, action) => {
      const newState = action.payload.map((car) => {
        return ({
          id: car.id,
          name: car.name,
          image: car.image,
          description: car.description,
          price: car.price,
          location: car.location,
          rented: car.rented,
          duration: car.duration,
          user_id: car.user_id
        });
      });
      return newState;
    },
    [addCarThunk.fulfilled]: (state, action) => action.payload,
  },
});

export const carsReducer = CarsSlice.actions;
export default CarsSlice.reducer;