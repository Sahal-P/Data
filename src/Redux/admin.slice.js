import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";



const name = 'admin'
const initialState = createinitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers })

export const adminAuthActions = { ...slice.actions, ...extraActions};
export const adminAuthReducers = slice.reducer;


function createinitialState() {
    return{
    admin : localStorage.getItem('admin') ? true : false,
    }
    }

function createReducers(){
    return {
        setAdmin
    };
    function setAdmin(state, action){
        state.value = action.payload;   
    }
}

function createExtraActions(){
    const baseUrl = "http://localhost:8000/api/"
    return {
        adminLogin: adminLogin(),
        adminLogout: adminLogout()
    }

    function adminLogin(){
        return createAsyncThunk(
            `${name}/admin-login`,
            async function ( {email, password}, { dispatch }){
                try{
                    const response = await axios.post("admin-login",{email,password})
                    const user = { email, password }
                    dispatch(adminAuthActions.setAdmin(true))
                    localStorage.setItem('admin', JSON.stringify(user));
                    localStorage.setItem('admin-access-token', JSON.stringify(response.data.token));
                    <Navigate to={'/admin'}/>
                } catch (error) {
                    console.log(error);
                }
            })
    }

    function adminLogout(){
        return createAsyncThunk(
            `${name}/admin-logout`,
             async function(arg ,{ dispatch }){
                await axios.post('admin-logout')
                localStorage.removeItem('admin');
                localStorage.removeItem('admin-access-token');
                dispatch(adminAuthActions.setAdmin(false))
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

export default adminAuthReducers;