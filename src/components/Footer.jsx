import { DirectionsCarFilled } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
 

const FooterContainer = styled.div`
   height: 50px;
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px;
`;

const Container = styled.div`
   display: flex;
   
   align-items: center;
   flex-direction: column;
`;

const Span = styled.span`
     font-size: 14px;
     color: white;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <DirectionsCarFilled style={{color:"goldenrod"}}/>
        <Span>copy @2024</Span>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
