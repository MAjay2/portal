
import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  email: '',
  password: '',
};



const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    
  },
});

export const { setUsername, setEmail, setPassword } = signupSlice.actions;

export default signupSlice.reducer;
