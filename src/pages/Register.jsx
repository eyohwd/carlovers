import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerUser } from '../apicalls';
import {  toast } from 'react-toastify';


const Container = styled.div`
   display: flex;
   align-Items: center;
   justify-content: center;
   height: 100vh;
   background: url("https://media.istockphoto.com/id/1414246009/photo/generic-red-electric-sports-car-driving-fast-around-corner-on-wet-racetrack.jpg?s=1024x1024&w=is&k=20&c=mbvENlECVNAh7NLqsZwe95Eb58HDZXWEScju9zPJC7o=") center;
   background-size: cover;
   
`;

const Wrapper = styled.div`
    width: 23%;
    background-color: white;
    border-radius: 10px;
    margin-left: 570px;
    margin-top: 300px;
    
`;
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   padding: 15px 0px 15px 15px;
   

  
   gap: 10px;
  
`;
const FormInput = styled.div`
  
   width: 39%;
  
   margin: 0px 15px 0px 0px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
   width: 100%;
   padding:5px;
   outline: none;
   border-radius: 5px;
  
`;

const Button = styled.button`
  padding: 5px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  margin-top: 10px;
  &:disabled{
    background-color: green;
    cursor: not-allowed;
  }
 // margin-left: 15px;
 
`;
 const LonginLink = styled.span`
   margin-top: 10px;
   font-size: 14px;
   color: teal;
   cursor: pointer;
 `;

 const Error = styled.span`
   color: red;
   font-size: 14px;
 `;

const Register = () => {
    const [ userData, setUserData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isFetching, error, isSuccess} = useSelector((state)=>state.user)

    useEffect(()=>{
        if(isSuccess){
           navigate("/login")
           toast.success("Resgistration Successful")
        }
    },[isSuccess, navigate])
    
    const handleInput = (e)=>{
        setUserData({...userData,[e.target.name]: e.target.value})
    };

    const handleClick = (e)=>{
        e.preventDefault()
      registerUser(userData, dispatch)
    }

  return (
   <Container>
     <Wrapper>
        <Form>
          <FormInput>
            <Label>Name:</Label>
            <Input type="text" placeholder="name" name="name" onChange={handleInput}/>
          </FormInput>

          <FormInput>
            <Label>Username:</Label>
            <Input type="text" placeholder="username" name="username" onChange={handleInput} />
          </FormInput>

          <FormInput>
            <Label>Email:</Label>
            <Input type="text" placeholder="email"  name="email" onChange={handleInput}/>
          </FormInput>

          <FormInput>
            <Label>Password:</Label>
            <Input type="password" name="password" onChange={handleInput}/>
          </FormInput>
          <Button onClick={handleClick} disabled={isFetching}>Register</Button>
          {error && <Error>Somthing Went Wrong</Error>}
          <Link to="/login">
          <LonginLink>Already have an account? <br/>Click here to Login</LonginLink>
          </Link>
        </Form>
        
     </Wrapper> 
    </Container>
  );
}

export default Register;
