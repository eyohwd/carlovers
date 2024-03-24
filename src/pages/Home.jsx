import React from 'react';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Products from '../components/Products';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
      <Navbar/>
      <Category/>
      <Products/>
      <Footer/>
    </>
  );
}

export default Home;
