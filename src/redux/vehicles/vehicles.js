import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import carService from "../../services/services";


const initialState = {
  cars: [],
  car: {},
  loading: false,
  error: null,
};

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const response = await carService.getAllCars();
    console.log(response.data);
    return response.data;
  }
);

export const fetchVehicle = createAsyncThunk(
  "vehicles/fetchVehicle",
  async (id) => {
    const response = await carService.getCar(id);
    return response.data;
  }
);

export const createVehicle = createAsyncThunk(
  "vehicles/createVehicle",
  async (data) => {
    const response = await carService.createCar(data);
    return response.data;
  }
);

export const updateVehicle = createAsyncThunk(
  "vehicles/updateVehicle",
  async (data) => {
    const response = await carService.updateCar(data.id, data);
    return response.data;
  }
);

export const removeVehicle = createAsyncThunk(
  "vehicles/removeVehicle",
  async (id) => {
    const response = await carService.removeCar(id);
    return response.data;
  }
);




export default vehiclesSlice.reducer;

