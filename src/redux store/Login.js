import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLogin: false,
    userName: '',
    email: '',
    password: '',
    adress: '',
    number: ''
  };
  
  const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
      login: (state, action) => {
        state.isLogin = true;
        state.userName = action.payload.user;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.adress = action.payload.adress;
        state.number = action.payload.phone;
        console.log(state);
      },
    },
  });
export default LoginSlice;
export const login = LoginSlice.actions.login