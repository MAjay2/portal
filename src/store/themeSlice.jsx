import {createSlice} from '@reduxjs/toolkit'


const initialState= {
    mode:false,
}

const themeSlice = createSlice({
    name:"darkMode",
    initialState,
    
    reducers:{
        toggleTheme:(state)=>{
            state.mode=!state.mode;  

        },
    
    },
 
})

export const {toggleTheme}= themeSlice.actions;
export default themeSlice.reducer