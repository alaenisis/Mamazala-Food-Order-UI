import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage';
import MenuPage from './pages/MenuPage';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext.js';


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="container-fluid p-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

