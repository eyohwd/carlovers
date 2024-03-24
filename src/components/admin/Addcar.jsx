import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { app } from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addCar, updateCar } from '../../apicalls';
import { useLocation, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';


const Container = styled.div`
padding: 20px;
-webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    margin: 30px;
    border-radius: 10px;
    width: 50%;
`;


const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   //flex-direction: column;
   gap: 20px;
`;

const FormInput = styled.div`
  width: 40%;
  margin: 0px 10px 0px 10px;
`;

const Label = styled.label`
   display: flex;
   align-items: center;
   margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;
 const Category = styled.select`
    text-align: center;
    width: 45%;
    height: 40px;
    margin-left: 10px;
 `;
 const Option = styled.option`
     font-size: 16px;
 `;

const Button = styled.button`
   width: 40%;
   padding: 5px;
   color: white;
   background-color: teal;
   cursor: pointer;
   border: none;
   font-size: 15px;
   &:disabled{
    background-color:green;
    cursor: not-allowed;
   }
`;

const Error = styled.span`
  font-size: 18px;
  color: red;
`;


const Addcar = () => {
    const {error, isFetching, isSuccess, isUpdate} = useSelector((state)=>state.car)
    const location = useLocation()
   const carId = location.pathname.split("/")[3]
    const carEdit = useSelector((state)=>state.car.cars.find((item)=>item._id === carId));
    // console.log(carEdit)
    const navigate = useNavigate();

    function detectForm(carId, f1, f2) {
          if(carId === "ADD"){
            return f1;
          }
          return f2
    };

    const initialState = {
        title:"",
        desc:"",
        model:"",
        img:"",
        price:null,
        year:null,
        categories:""
    };

    const [file, setFile] = useState(null)

    const [data, setData] = useState(
        () => {
       const newState = detectForm(carId, {...initialState}, carEdit)
       return newState;
        }
    );

    const dispatch = useDispatch()

    const handleInput = (e) =>{
         setData({
            ...data, [e.target.name]:e.target.value
         })
    };

    useEffect(()=>{
       if(isSuccess){
           navigate("/admin/home")
           toast.success("Car created Successful")
       }

       if(isUpdate){
        navigate("/admin/home")
        toast.success("Car edited Successful")
    }
    },[isSuccess, navigate, isUpdate])

    const handleClick = (e) => {
        e.preventDefault();

        const fileName = new Date().getTime() + file.name;
       const storage = getStorage(app)
       const storageRef = ref(storage, fileName)

       const uploadTask = uploadBytesResumable(storageRef, file);

       // Register three observers:
       // 1. 'state_changed' observer, called any time the state changes
       // 2. Error observer, called on failure
       // 3. Completion observer, called on successful completion
       uploadTask.on('state_changed', 
         (snapshot) => {
           // Observe state change events such as progress, pause, and resume
           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log('Upload is ' + progress + '% done');
           switch (snapshot.state) {
             case 'paused':
               console.log('Upload is paused');
               break;
             case 'running':
               console.log('Upload is running');
               break;
               default:
           }
         }, 
         (error) => {
           // Handle unsuccessful uploads
         }, 
         () => {
           // Handle successful uploads on complete
           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addCar( {...data, img:downloadURL, price:Number(data.price), year:Number(data.year)}, dispatch);
          
         // addCar(car, dispatch)
           });
         }
       );
     //  navigate("/admin/home")

      //  console.log({...data, , })
    };

    const handleEdit = ()=>{
       updateCar(carId, data, dispatch)
    }

    const categories = [
        {id:1, name:"ford"},
        {id:2, name:"bmw"},
        {id:3, name:"porsche"},
        {id:4, name:"ferrari"},
        {id:5, name:"bugatti"},
        {id:6, name:"benz"},
        {id:7, name:"lamborghini"},
        {id:8, name:"bentley"},
        {id:9, name:"rolls-royce"},
        {id:10, name:"nissan"},
        {id:11, name:"honda"},
        {id:12, name:"toyota"},
        {id:13, name:"audi"},
        {id:14, name:"range-rover"},
        {id:15, name:"lexus"}
    ]
    
  return (
    <Container>
      <Form>
        <FormInput>
            <Label htmlFor="file">
                Image:
                <DriveFolderUploadOutlined style={{cursor:"pointer", fontSize:"30px", marginLeft:"5px"}} value={data.img}/>
                </Label>
            <Input type="file" id="file" style={{display:"none"}}   onChange={(e)=>setFile(e.target.files[0])}/>
        </FormInput>

        <FormInput>
            <Label>Title:</Label>
            <Input type="text" placeholder="Car title" name="title" value={data.title} onChange={handleInput}/>
        </FormInput>

        <FormInput>
            <Label>Desc:</Label>
            <Input type="" placeholder="Car description" name="desc" value={data.desc} onChange={handleInput}/>
        </FormInput>

        <FormInput>
            <Label>Model:</Label>
            <Input type="text" placeholder="Model type" name="model" value={data.model} onChange={handleInput}/>
        </FormInput>



        <FormInput>
            <Label>Price:</Label>
            <Input type="number" placeholder="Car price" name="price" value={data.price}  onChange={handleInput}/>
        </FormInput>

        <FormInput>
            <Label>Year:</Label>
            <Input type="number" placeholder="Year of release" name="year" value={data.year} onChange={handleInput}/>
        </FormInput>

        <Category name="categories" onChange={handleInput}>
            <Option selected >-- Category --</Option>
            {categories.map((cat)=>(<Option  key={cat.id} >{cat.name}</Option>))}
        </Category>

        
        <Button onClick={detectForm(carId, handleClick, handleEdit)} disabled={isFetching}>{detectForm(carId,"CREATE", "EDIT")}</Button>
       {error && <Error>Something Went Wrong</Error>}
      </Form>
    </Container>
  );
}

export default Addcar;
