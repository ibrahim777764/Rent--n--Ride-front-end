import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LOGIN = '/auth/login';
const initialState = {};

export const login = createAsyncThunk(
  LOGIN,
  async (FormData) => {
    const response = await fetch('https://protected-sea-38971.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormData),
    });
    response.data = await response.json();

    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload.token) {
        localStorage.setItem('user', JSON.stringify(action.payload));
        return action.payload;
      }

      return action.payload;
    },
  },
});

export default loginSlice.reducer;
