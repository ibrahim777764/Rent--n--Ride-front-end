/* eslint-disable linebreak-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SIGNUP = '/api/v1/users';
const initialState = [];

export const signUp = createAsyncThunk(
  SIGNUP,
  async (FormData) => {
    const response = await fetch('https://protected-sea-38971.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
      },
      body: JSON.stringify(FormData),
    });
    response.data = await response.json();

    return response.data;
  },
);

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled]: () => ({ success: 'Successfully signed up, you can now login' }),
  },
});

export default signUpSlice.reducer;
