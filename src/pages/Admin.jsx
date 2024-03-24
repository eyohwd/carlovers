import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/admin/Sidebar';
import Home from '../components/admin/Home';
import { Route, Routes } from 'react-router-dom';
import Users from '../components/admin/Users';
import Addcar from '../components/admin/Addcar';

const Container = styled.div`
   display: flex;
`;
 const Content = styled.div`
   flex: 6;

 `;

const Admin = () => {
  return (
      <>
      <Navbar/>
    <Container>
    <Sidebar/>
    <Content>
      <Routes>
       <Route path="home" element={<Home/>}/>
       <Route path="users" element={<Users/>}/>
       <Route path="addcar/:id" element={<Addcar/>}/>
     </Routes>
    </Content>
    </Container>
    </>

  );
}

export default Admin;
