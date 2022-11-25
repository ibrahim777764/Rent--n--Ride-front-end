import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../services/services';

const initialState = {
  user: {},
  loading: false,
  error: null,
  islogin: false,
};

export const login = createAsyncThunk(
  'user/login',
  async (data) => {
    const response = await userService.login(data);
    console.log(response.data);
    localStorage.setItem('token', response.data.jwt);
    localStorage.setItem('current_user', response.data.user.id);
    return response.data;
  },
);

export const signup = createAsyncThunk(
  'user/signup',
  async (data) => {
    const response = await userService.signup(data);
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.islogin = false;
    },

    status: (state, action) => {
      state.islogin = action.payload;
      console.log(state.islogin);
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.islogin = true;
      console.log(state.islogin);
      window.location.href = '/';
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.islogin = true;
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { logout, status } = userSlice.actions;

export default userSlice.reducer;
