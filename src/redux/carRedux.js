import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "car",
    initialState: {
        cars:[],
        isFetching: false,
        error: false,
        isSuccess: false,
        isUpdate: false
    },
    reducers: {
        // CREATE
        addCarStart:(state)=>{
            state.isFetching = true;
            state.error = false;
        },
        addCarSuccess:(state, action)=>{
            state.isFetching = false;
            state.cars.push(action.payload);
            state.isSuccess=true;
        },
        addCarFailure:(state)=>{
            state.isFetching = false;
            state.error = true;

            
        },

        // GET all cars
        getCarStart:(state)=>{
            state.isFetching = true;
            state.error = false;
        },

        getCarSuccess:(state,action) =>{
                 state.isFetching = false;
                 state.cars = action.payload;
        },

        getCarFailure:(state)=>{
            state.error= true;
            state.isFetching=false;
        },


        // Delete a car
        deleteCarStart:(state)=>{
            state.isFetching = true;
            state.error = false;
        },

        deleteCarSuccess:(state,action) =>{
                 state.isFetching = false;
                 state.cars.splice(
                    state.cars.findIndex((item) => item._id === action.payload._id), 1
                 )
        },

        deleteCarFailure:(state)=>{
            state.error= true;
            state.isFetching=false;
        },


        // update a car
        updateCarStart:(state)=>{
            state.isFetching = true;
            state.error = false;
        },

        updateCarSuccess:(state,action) =>{
                 state.isFetching = false;
                 state.cars[state.cars.findIndex((item) => item._id === action.payload.id)] = action.payload.car;
                  state.isUpdate = true;  
                 
        },

        updateCarFailure:(state)=>{
            state.error= true;
            state.isFetching=false;
        }



    }
})

export const {addCarStart, addCarSuccess, addCarFailure, 
    getCarStart, getCarSuccess, getCarFailure,
 deleteCarStart, deleteCarSuccess, deleteCarFailure,
  updateCarStart, updateCarSuccess, updateCarFailure} = carSlice.actions;

export default carSlice.reducer;