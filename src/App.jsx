import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import Footer
import AboutUs from "./components/AboutUs";
import Policy from "./pages/Policy";


const App = () => {
  return (
    <>
      <Navbar /> {/*  Navbar with cart count and dropdown */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer /> {/* Footer always visible */}
    </>
  );
};

export default App;
