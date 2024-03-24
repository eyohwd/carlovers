import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';
import { mobile } from '../responsive';



const Container = styled.div`
  // width: 100%;
`;
const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const CatText = styled.div`
    font-size: 24px;
    font-weight: bold;
`;
const SortText = styled.select`
   padding: 5px;
   ${mobile({padding: "3px", width: "70px"})}
`;
const Option = styled.option`
   
`;
const SearchContainer = styled.div`
 display: flex;
 align-items: center
 padding: 3px;
 border: 1px solid gray;
 border-radius: 5px;
 
`;
const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 3px;
  padding: 8px;
  ${mobile({width: "45px", padding:"3px"})}
`;

const ProductList = () => {
  const [sort, setSort] = useState("newest")
  const [search, setSearch] = useState("")
  const location = useLocation()
  const cat= location.pathname.split("/")[2]
  return (
    <Container>
    <Navbar/>
    <SortContainer>
      <CatText>{cat}</CatText>
      <SearchContainer>
        <Input placeholder='search...' onChange={(e)=>setSearch(e.target.value)}/>
        <Search/>
      </SearchContainer>
      <SortText onChange={(e)=>setSort(e.target.value)}>
        <Option value="newest" selected>Newest</Option>
        <Option value="ascp">Lowest Price</Option>
        <Option value="descp">Highest Price</Option>
        <Option value="ascy">Oldest Model</Option>
        <Option value="descy">Newest Model</Option>
      </SortText>
    </SortContainer>
    <Products cat={cat} sort={sort} search={search}/>  
    </Container>
  );
}

export default ProductList;
