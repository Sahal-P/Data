import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";


const name = 'user'
const initialState = createinitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers })

export const userActions = { ...slice.actions, ...extraActions};
export const userReducers = slice.reducer;


function createinitialState() {
    return{
    data : null
    }
}

function createReducers(){
    return {
        setUser
    };
    function setUser(state, action){
        state.data = action.payload;   
    }
}

function createExtraActions(){
    const baseUrl = "http://localhost:8000/api/"

    return {
        getUser: getUser(),
        getUsers: getUsers()
    }

    function getUser(){
        return createAsyncThunk(
            `${name}/getUser`,
            async function ( dispatch ){
                    console.log("IIIIIIIIIIIIIIIIIBBBBBBBBBBBBBBBBB")
                    const response = await axios.get("get-user")  
                    console.log(response.data)
                    dispatch(userActions.setUser(response.data))
                    console.log('ooo');
                    const user = useSelector((state) => state.user.data)
                    console.log(user,'ooooooooooooooooooo');
             
            })
    }
    function getUsers(){
        return createAsyncThunk(
            `${name}/getUsers`,
            async function (arg, {dispatch} ){
                    console.log("IIIIIIIIIIIIIIIIIBBBBBBBBBBBBBBBBB")
                    const response = await axios.get("get-users")  
                    console.log(response.data,'.......')
                    await dispatch(userActions.setUser(response.data))
                    console.log('ooo');
                    const user = useSelector((state) => state.user.data)
                    console.log(user,'ooooooooooooooooooo');
             
            })
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

export default userReducers;