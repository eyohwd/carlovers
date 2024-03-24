import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser } from '../apicalls';
import { useDispatch, useSelector } from 'react-redux';
import {  toast } from 'react-toastify';


const Container = styled.div`
   display: flex;
   align-Items: center;
   justify-content: center;
   height: 100vh;
   background: url("https://media.istockphoto.com/id/1336106724/photo/yellow-electric-sports-car-charging-from-cable-on-parking-spot-overlooking-sea-at-dawn.jpg?s=1024x1024&w=is&k=20&c=tl8CXNtFNLwxT0kmCGL7KxMNpKVrie3ROhKdNWVqQ1Y=") center;
   background-size: cover;
   background-position: center;
   
`;

const Wrapper = styled.div`
    width: 20%;
    background-color: white;
    padding: 20px;
    margin-left: 580px;
    margin-top: 300px;
    border-radius: 10px;
   // opacity: 0.9;
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 10px;
  
`;
const FormInput = styled.div`
   width: 80%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
   width: 100%;
   padding:10px;
   outline: none;
   border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  
  &:disabled{
    background-color: green;
    cursor: not-allowed;
  }
`;

const LinkHome =styled.span`
margin-left: 25px;
`;

const Error = styled.span`
 color: red;
 font-size: 14px;
`;

const Login = () => {
    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, isSuccess, isFetching} = useSelector((state)=>state.user)
    useEffect(()=>{
      if(isSuccess){
        navigate("/")
        toast.success("Login successful..")
      }
    },[isSuccess, navigate])

    const handleClick = (e)=>{
      e.preventDefault()
      loginUser({email, password}, dispatch);
    }
    console.log(email, password);
  return (
    <Container>
     <Wrapper>
        <Form>
          <FormInput>
            <Label>Email:</Label>
            <Input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          </FormInput>

          <FormInput>
            <Label>Password:</Label>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </FormInput>
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
        {error && <Error>Something Went Wrong</Error>}
        </Form>
        
        <Link to="/">
        <LinkHome>&rarr; Home</LinkHome>
        </Link>

        <Link to="/register">
        <LinkHome>&rarr; Register</LinkHome>
        </Link>
     </Wrapper> 
    </Container>
  );
}

export default Login;
