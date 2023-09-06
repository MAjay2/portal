// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearCredentials: (state) => {
      state.username = '';
      state.password = '';
    },
  },
});

export const { setUsername, setPassword, clearCredentials } = loginSlice.actions;

export default loginSlice.reducer;
