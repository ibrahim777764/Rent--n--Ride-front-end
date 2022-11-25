import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { bookingService } from '../../services/services';

const initialState = {
    bookings: [],
    loading: false,
    error: null,
};

export const fetchBookings = createAsyncThunk(
    'bookings/fetchBookings',
    async (id) => {
        const response = await bookingService.getBookings(id);
        return response.data;
    }
);


export const createBooking = createAsyncThunk(
    'bookings/createBooking',
    async (data) => {
        const response = await bookingService.createBooking(data);
        return response.data;
    }
);

export const removeBooking = createAsyncThunk(
    'bookings/removeBooking',
    async (id) => {
        const response = await bookingService.removeBooking(id);
        return response.data;
    }
);

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBookings.fulfilled]: (state,action) => {
            state.loading = true;
            state.bookings=action.payload;
            console.log(state.bookings);
            console.log(state.loading);

        }
    }
});

export default bookingsSlice.reducer;
