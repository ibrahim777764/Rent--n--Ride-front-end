import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {userService} from '../../services/services';

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
        localStorage.setItem('token',response.data.jwt);
        localStorage.setItem('current_user', response.data.user.id);
        return response.data;
    }
);

export const signup = createAsyncThunk(
    'user/signup',
    async (data) => {
        const response = await userService.signup(data);
        return response.data;
    }
);


export const {logout,status} = userSlice.actions;

export default userSlice.reducer;