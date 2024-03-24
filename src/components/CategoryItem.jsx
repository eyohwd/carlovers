import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
  flex: 1;
  padding: 5px;
  min-width: 380px;
 height: 220px;
  margin: 3px;
  position: relative;
  ${mobile({padding: "2px", margin:"0px", minWidth:"300px"})}
  
  

`;

const Image = styled.img`
width: 100%;
 height: 100%;
// object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: goldenrod;
  font-size: 24px;
  font-weight: bold;


`;

const Button = styled.button`
   padding: 5px 15px;
   border: none;
   background-color: orangered;
   cursor: pointer;
   font-size: 18px;
   color: white;
   border-radius: 3px;
`;

const CategoryItem = ({item}) => {
     
     
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
        <Button>Enter</Button>
        </Link>
      </Info>
    </Container>
  );
}

export default CategoryItem;
