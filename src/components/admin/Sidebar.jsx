import { AccountCircle} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Container = styled.div`
  flex: 1;
  border-right: 1px solid lightgray;
  min-height: 100vh;
  position: relative;


`;

const User = styled.div`
    height: 100px;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blue;
    
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

`;

const ListItems = styled.li`
 // margin-left: 10px;
  border-bottom: 1px solid gray;
  padding: 10px;
  text-align: center;
  font-weight: 500;
  color: orangered;
  &:hover{
    border-right: 2px solid orangered;
    
  }
`;



const Sidebar = () => {
  


  return (
    <Container>
      
    <User>
        <AccountCircle style={{fontSize: "50px"}}/>
        User
    </User>
     <List>
       <Link to="/admin/home" style={{textDecoration:"none"}}>
         <ListItems>
         Home
         </ListItems>
       </Link>
      
       <Link to="/admin/users" style={{textDecoration:"none"}}>
         <ListItems>
          AllUsers
         </ListItems>
        </Link>
         
         <Link to="/admin/addcar/ADD" style={{textDecoration:"none"}}>
           <ListItems>
            AddCar
           </ListItems>
         </Link>
    </List>
    </Container>
  );
}

export default Sidebar;
