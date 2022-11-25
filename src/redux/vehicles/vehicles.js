import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carService from '../../services/services';

const initialState = {
  cars: [],
  car: {},
  loading: false,
  error: null,
};

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async () => {
    const response = await carService.getAllCars();
    console.log(response.data);
    return response.data;
  },
);

export const fetchVehicle = createAsyncThunk(
  'vehicles/fetchVehicle',
  async (id) => {
    const response = await carService.getCar(id);
    return response.data;
  },
);

export const createVehicle = createAsyncThunk(
  'vehicles/createVehicle',
  async (data) => {
    const response = await carService.createCar(data);
    return response.data;
  },
);

export const updateVehicle = createAsyncThunk(
  'vehicles/updateVehicle',
  async (data) => {
    const response = await carService.updateCar(data.id, data);
    return response.data;
  },
);

export const removeVehicle = createAsyncThunk(
  'vehicles/removeVehicle',
  async (id) => {
    const response = await carService.removeCar(id);
    return response.data;
  },
);

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVehicles.pending]: (state) => {
      state.loading = true;
    },
    [fetchVehicles.fulfilled]: (state, action) => {
      state.loading = false;
      state.cars = action.payload;
      console.log(state);
    },
    [fetchVehicles.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchVehicle.pending]: (state) => {
      state.loading = true;
    },
    [fetchVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.car = action.payload;
    },
    [fetchVehicle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createVehicle.pending]: (state) => {
      state.loading = true;
    },
    [createVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.cars.push(action.payload);
    },
    [createVehicle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateVehicle.pending]: (state) => {
      state.loading = true;
    },
    [updateVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      state.cars[index] = action.payload;
    },
    [updateVehicle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [removeVehicle.pending]: (state) => {
      state.loading = true;
    },
    [removeVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
    },
    [removeVehicle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default vehiclesSlice.reducer;
