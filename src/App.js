import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Polo from './pages/Polo';
import FAQ from './pages/FAQ';
import ReturnPolicy from './pages/ReturnPolicy';
import Support from './pages/Support';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import CartSidebar from './components/CartSidebar';
import './App.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && item.selectedSize === product.selectedSize
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFromCart = (productId, selectedSize) => {
    setCartItems(prev => prev.filter(item => 
      !(item.id === productId && item.selectedSize === selectedSize)
    ));
  };

  const updateCartItemQuantity = (productId, selectedSize, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }
    
    setCartItems(prev => prev.map(item =>
      item.id === productId && item.selectedSize === selectedSize
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
        {/* Promotional Banner */}
        <div className="promo-banner">
          <div className="promo-content">
            <span className="promo-text">Grab our launch offer -Save25% Own the luxe</span>
            <span className="promo-text">EXTRA 10% OFF ON PREPAID ORDERS</span>
          </div>
        </div>
        
        <Header
          cartCount={getCartCount()}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
            <Route path="/polo" element={<Polo />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/story" element={<div className="page-placeholder">Our Story Page</div>} />
            <Route path="/cart" element={<div className="page-placeholder">Cart Page</div>} />
            <Route path="/tracking" element={<div className="page-placeholder">Order Tracking Page</div>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} onOrderComplete={() => {}} onClearCart={() => setCartItems([])} />} />
            <Route path="/orders" element={<div className="page-placeholder">My Orders Page</div>} />
          </Routes>
        </main>

        <Footer />
        
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateCartItemQuantity}
          cartTotal={getCartTotal()}
          onCheckout={() => {
            setIsCartOpen(false);
            window.location.href = '/checkout';
          }}
        />
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
