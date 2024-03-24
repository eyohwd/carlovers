import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carRuducer from "./carRedux"
import userReducer from "./userRedux"


const rootReducer = combineReducers({
    car: carRuducer,
    user: userReducer
 })


export default configureStore({
  reducer: rootReducer 
})