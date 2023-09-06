import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import   signUpReducer  from './signupSlice';
import loginReducer from './loginSlice'

const USER_STORAGE_KEY = 'my_app_user';
const userData = JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) ;

const store = configureStore({
    reducer:{
        darkMode:themeReducer,
        signup: signUpReducer,
        login:loginReducer
    },
   
})

export default store;  