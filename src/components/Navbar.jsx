import { DirectionsCarFilled, Home, Search } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AdminOnlyRoute from './AdminOnlyRoute';
import { logOut } from '../redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import ShowOnLogin, { ShowOnLogout } from './hiddenLinks';
import { mobile } from '../responsive';



const Container = styled.div`
height: 8vh;
with: 100%;
display: flex;
align-items: center;
background-color: black;
border-bottom: 1px solid lightgray;
${mobile({width: "100%"})}
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 10px 20px;
width: 100%;
${mobile({padding: "none"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;

`;
const SearchContainer = styled.div`
padding: 5px;
width: 200px;
display: flex;
align-items: center;
border: 1px solid lightgray;
border-radius: 5px;
${mobile({width: "100px", padding: "0px"})}
`;
const Input = styled.input`
 border: none;
 outline: none;
 cursor: pointer;
 background-color: transparent;
 ${mobile({width: "70px"})}
`;
const Center = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   ${mobile({fontSize: "12px",display: "flex", alignItems:"center", justifyContent:"center"})}
    
   
`;
const Logo = styled.h1`
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    ${mobile({fontSize: "12px"})}
    
    
`;
const Right = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     
     
     `;
     

     const Item = styled.div`
        margin-left: 25px;
        cursor: pointer;
        ${mobile({marginLeft: "5px"})}
     `;
     const Button = styled.button`
          border: none;
          color: white;
          background-color: blue;
          border-radius: 5px;
          padding: 5px;
          cursor: pointer;
          ${mobile({padding: "2px", fontSize:"11px"})}
     `;

     const Logout = styled.button`
     border: none;
     color: white;
     background-color: teal;
     border-radius: 5px;
     padding: 5px;
     cursor: pointer;
     margin-left: 25px;
     ${mobile({marginLeft: "5px", padding:"2px", fontSize:"11px"})}
     `;

    


const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOutUser = ()=>{
    localStorage.removeItem("user")
   dispatch(logOut())
  }
const user= useSelector((state)=>state.user.currentUser)
 
  return (
    <Container>
        <Wrapper>
           <Left>
            <SearchContainer>
              <Input placeholder='search..'/>
              <Search style={{color:"gray"}}/>
            </SearchContainer>
           </Left>
           <Center>
            <Logo>
                CAR LOVERS
            <DirectionsCarFilled style={{color: "goldenrod"}}/>
            </Logo>
           </Center>

           <Right>
            <Link to="/admin/home">
              <AdminOnlyRoute>
                <Button>Admin</Button>
                </AdminOnlyRoute>
                </Link>

                <Link to="/">
                <Item><Home style={{color:"white"}}/></Item>
                </Link>

                  
                  <ShowOnLogout>
                 <Link to="/login" style={{textDecoration:"none"}}>
                <Item >Login</Item>
                </Link>
                </ShowOnLogout>
                
                <ShowOnLogin>
                   <Logout onClick={logOutUser}>Logout</Logout>
                </ShowOnLogin>
            </Right>
        </Wrapper>
    </Container>
  );
}

export default Navbar;
