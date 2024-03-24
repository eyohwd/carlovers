import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 40px;
  height: 80vh;
  ${mobile({flexDirection: "column", padding:"10px", height:"70vh", gap:"30px"})}
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  flex: 2;
  height: 100%;
  ${mobile({height: "80%"})}
`;

const Item = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  margin-top: 20px;
  ${mobile({marginTop: "0px"})}
`;
const Year = styled.span`
  font-size: 24px;
  margin-right: 20px;
  ${mobile({fontSize: "20px"})}
  
`;
const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  ${mobile({fontSize: "20px"})}
`;

const Image = styled.img`
  height: 70%;
  width: 80%;
  ${mobile({height: "90%", width:"100%"})}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  // padding: 50px;
  padding-right: 100px;
  ${mobile({padding: "5px"})}
`;

const Title = styled.h1`
  font-size: 60px;
  ${mobile({fontSize: "25px"})}
`;

const Model = styled.h2`
  font-size: 30px;
  margin: 20px 0px;
  ${mobile({fontSize: "18px"})}
`;
const Desc = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: center;
  ${mobile({fontSize:"16px"})}
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [car, setCar] = useState({});

  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASEURL}cars/find/` + id
        );
        setCar(res.data);
      } catch (error) {}
    };
    getCar();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container>
        <ImageContainer>
          <Item>
            <Year>{car.year}</Year>
            <Price>{`$${car.price}`}</Price>
          </Item>
          <Image src={car.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{car.title}</Title>
          <Model>{car.model}</Model>
          <Desc>{car.desc}</Desc>
        </InfoContainer>
      </Container>
    </>
  );
};

export default Product;
