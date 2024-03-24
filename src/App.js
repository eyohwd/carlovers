import {BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
   <Router>
      <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/products/:category" element={<ProductList/>}/>
    <Route path="/admin/*" element={<Admin/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
  <ToastContainer/>
  </>
  );
}

export default App;
