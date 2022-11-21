/* eslint-disable linebreak-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SIGNUP = '/api/v1/users';
const initialState = [];
const url = 'https://protected-sea-38971.herokuapp.com/api/v1/users'

export const signUp = createAsyncThunk(SIGNUP, async (
  {
    username,
    email,
    password,
    password_confirmation
  }
) => {
  const user = {
    username,
    email,
    password,
    password_confirmation
  };
  // fetch cars
  const res = await axios.post(url, user)
    .catch((err) => { console.log('Error', err) });
  return res
});


const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled]: () => ({ success: 'Successfully signed up, you can now login' }),
  },
});

export default signUpSlice.reducer;