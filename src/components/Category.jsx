import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px
  width: 100vw;
 // background-color: gray;
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item)=>(
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  );
}

export default Category;
