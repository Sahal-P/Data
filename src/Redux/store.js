import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth.slice'
import userReducers from './user.slice'
import adminAuthReducers from './admin.slice'

export const store = configureStore({
    reducer:{
        auth:authReducer,
        admin:adminAuthReducers,
        user:userReducers
    }
});
