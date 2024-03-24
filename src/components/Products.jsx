import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';


const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  
`;

const Products = ({cat, sort, search}) => {
  
       const [cars, setCars] = useState([]);
       const [filteredCars, setFilteredCars] = useState([])

                  useEffect(()=>{
                     const getCars = async()=>{
                      try {
                        const res = await axios.get(cat ? `${process.env.REACT_APP_BASEURL}cars?category=${cat}` : `${process.env.REACT_APP_BASEURL}cars`)
                        setCars(res.data)
                      } catch (error) {
                        
                      }
                     }
                     getCars()
                  },[cat])

     useEffect(()=>{
       if((sort === "newes")){
      setFilteredCars([...cars].sort((a,b)=> a.createdAt - b.createdAt))
       } else if((sort === "ascp")){
        setFilteredCars([...cars].sort((a,b)=> a.price - b.price))
       } else if((sort === "descp")){
       setFilteredCars([...cars].sort((a,b)=> b.price - a.price))
       } else if((sort === "ascy")){
       setFilteredCars([...cars].sort((a,b)=> a.year - b.year))
       } else {
       setFilteredCars([...cars].sort((a,b)=> b.year - a.year))
       }
     },[sort, cars])

     useEffect(()=>{
    cat && setFilteredCars(cars.filter((car)=>car.title.toLowerCase().includes(search.toLowerCase()) ))
     },[cat, cars, search])

  return (
    <Container>
      { cat ? filteredCars.map((item)=>(<Product key={item.id} item={item} cat={cat}/>)) : 
      cars.slice(0,9).map((item)=>(<Product key={item.id} item={item} cat={cat}/>))}
    </Container>
  );
}

export default Products;
