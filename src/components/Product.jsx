import { SearchOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  min-width: 400px;
  height: 340px;
  position: relative;
 // border: 1px solid gray;
 -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    ${mobile({minWidth:"300px"})}
    

  
`;

const Desc = styled.div`
  height: 15%;
  display: flex;
  align-Items: center;
  justify-Content: center;
  font-weight: bold;
  //font-size: 16px;
 
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
`;


const Info = styled.div`
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
`;


const Icon = styled.div`
 width: 30px; 
 height: 30px;
 border-radius: 50%;
 cursor: pointer;
 border: 1px solid white;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Items= styled.div`

 width: 100%;
 height: 20%;
 background-color: orangered;
 border-radius: 0px 0px 10px 10px;

`;
const Item= styled.div`
   padding: 0px 10px;
   display: flex;
   gap: 20px;
   align-items: center;
   `;

const ItemKey = styled.span`
  color: white;
  font-weight: 500;
  margin-right: 3px;
  font-size: 16px;
`;
const ItemValue = styled.span`
  font-size: 14px;
  color: white;
`;

const Product = ({item}) => {
  
     const shortenText = (text) => {
         if(text.length > 45){
            const shortenedText = text.substring(0, 45).concat("...")
            return shortenedText;
         }
         return text;
     };

  return (
    <Container>
        <Desc>{shortenText(item.desc)}</Desc>
      <Image src={item.img}/>
      <Info>
         <Link to={`/product/${item._id}`}>
        <Icon>
        <SearchOutlined style={{color:"white"}}/>
        </Icon>
        </Link>
      </Info>
      <Items>
        <Item>
            <ItemKey>Name:</ItemKey>
            <ItemValue>{item.title}</ItemValue>
        </Item>
        <Item>
            <ItemKey>Year:</ItemKey>
            <ItemValue>{item.year}</ItemValue>
        </Item>
        <Item>
            <ItemKey>Price:</ItemKey>
            <ItemValue>{`$ ${item.price}`}</ItemValue>
        </Item>
      </Items>
    </Container>
  );
}

export default Product;
