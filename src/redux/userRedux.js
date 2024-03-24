import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"))
const userSlice = createSlice({
    name: "user",
    initialState: {
       currentUser: user ? user : null,
       isFetching: false,
       isSuccess:false,
       error: false,
    },

    // Register user
    reducers: {
        registerUserStart: (state)=>{
           state.isFetching = true;
           state.error = false;
        },

        registerUserSuccess: (state, action)=>{
            state.isFetching = false;
            state.isSuccess = true;
            state.currentUser = action.payload;
        },

        registerUserFailure: (state)=>{
            state.error = true;
            state.isFetching = false;
        },

        // Login User

        loginUserStart: (state)=>{
            state.isFetching = true;
            state.error = false;
         },
 
         loginUserSuccess: (state, action)=>{
             state.isFetching = false;
             state.isSuccess = true;
             state.currentUser = action.payload;
         },
 
         loginUserFailure: (state)=>{
             state.error = true;
             state.isFetching = false;  
    },

    // Logout User
    logOut: (state)=>{
        state.currentUser = {};
    }
},



})

export const { registerUserStart, registerUserSuccess, registerUserFailure,
                loginUserStart, loginUserSuccess, loginUserFailure, logOut} = userSlice.actions;

                export default userSlice.reducer;