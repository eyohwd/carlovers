
import { addCarStart, addCarSuccess, addCarFailure, getCarStart, getCarSuccess, getCarFailure, deleteCarStart, deleteCarSuccess, deleteCarFailure, updateCarStart, updateCarSuccess, updateCarFailure } from "./redux/carRedux";
import { loginUserFailure, loginUserStart, loginUserSuccess, registerUserFailure, registerUserStart, registerUserSuccess } from "./redux/userRedux";
import { publicRequest } from "./requestMethods";




export const addCar = async(car, dispatch)=>{
   
    dispatch(addCarStart());
    try {
        const res = await publicRequest.post("/cars", car);
        dispatch(addCarSuccess(res.data));
        
    } catch (error) {
        dispatch(addCarFailure())
    }
};


export const getCars = async(dispatch)=>{
      
    dispatch(getCarStart());
    try {
        const res = await publicRequest.get("/cars");
        dispatch(getCarSuccess(res.data));
        
    } catch (error) {
        dispatch(getCarFailure())
    }
};


export const deleteCar = async (id, dispatch) => {
      
    dispatch(deleteCarStart());
    try {
        const res = await publicRequest.delete(`/cars/${id}`);
        dispatch(deleteCarSuccess(res.data));
        
    } catch (error) {
        dispatch(deleteCarFailure())
    }
};

export const updateCar = async (id, car, dispatch) => {
      
    dispatch(updateCarStart());
    try {
        const res = await publicRequest.put(`/cars/${id}`, car);
        dispatch(updateCarSuccess(res.data));
        
    } catch (error) {
        dispatch(updateCarFailure())
    }
};

export const registerUser = async ( user, dispatch) => {
      
    dispatch(registerUserStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerUserSuccess(res.data));
        if(res.data){
            localStorage.setItem("user", JSON.stringify(res.data))
            
        }
    } catch (error) {
        dispatch(registerUserFailure())
    }
};

export const loginUser = async ( user, dispatch) => {
      
    dispatch(loginUserStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginUserSuccess(res.data));
        if(res.data){
            localStorage.setItem("user", JSON.stringify(res.data))
            
        }
    } catch (error) {
        dispatch(loginUserFailure())
    }
};


