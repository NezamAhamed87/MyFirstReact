import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ProductList from './Components/ProductList';
import ProductCounter from './Components/ProductCounter';
import Footer from './Components/Footer';
import { ProductProvider } from './Context/ProductContext';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
      <ProductProvider>
          <Router>
              <div className="App">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<ProductList />} />
                      <Route path="/about" element={<About />} />
                  </Routes>
                  <Footer />
              </div>
          </Router>
      </ProductProvider>
  );
}

export default App;

