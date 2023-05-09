import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";



const name = 'auth'
const initialState = createinitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers })

export const authActions = { ...slice.actions, ...extraActions};
export const authReducers = slice.reducer;


function createinitialState() {
    return{
    value : localStorage.getItem('auth') ? true : false,
    }
    }

function createReducers(){
    return {
        setAuth
    };
    function setAuth(state, action){
        state.value = action.payload;   
    }
}

function createExtraActions(){
    const baseUrl = "http://localhost:8000/api/"
    return {
        login: login(),
        logout: logout()
    }

    function login(){
        return createAsyncThunk(
            `${name}/login`,
            async function ( {email, password}, { dispatch }){
                try{
                    const response = await axios.post("login",{email,password})
                    const user = { email, password }
                    dispatch(authActions.setAuth(true))
                    localStorage.setItem('auth', JSON.stringify(user));
                    localStorage.setItem('access-token', JSON.stringify(response.data.token));
                    <Navigate to={'/'}/>
                } catch (error) {
                    console.log(error);
                }
            })
    }

    function logout(){
        return createAsyncThunk(
            `${name}/logout`,
             async function(arg ,{ dispatch }){
                await axios.post('logout')
                localStorage.removeItem('auth');
                localStorage.removeItem('access-token');
                dispatch(authActions.setAuth(false))
            }
        )
    }
}


// export const authSlice = createSlice({
//     name : 'auth',
//     initialState,
//     reducers:{
//         setAuth: (state,action)=>{
//             state.value = action.payload;
//         }
//     }

// })

// export const {setAuth} = authSlice.actions;

export default authReducers;