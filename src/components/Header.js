import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaUser, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

const Header = ({ cartCount, onLoginClick, onCartClick }) => {
  const { currentUser, userProfile, logout } = useAuth();
  const isLoggedIn = !!currentUser;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'OVERSIZED T SHIRT :(THE CULTURE GLITCH)', path: '/products' },
    { name: 'EXCHANGE/RETURN POLICY', path: '/return-policy' },
    { name: 'SUPPORT : CONTACT US - MAIL AND WHATSAPP+AI CHATBOX', path: '/support' },
    { name: 'FAQ : FAQ\'S', path: '/faq' },
    { name: 'Behind LH- STORY', path: '/story' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Left - Menu Button */}
        <div className="header-left">
          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Center - Logo */}
        <div className="header-center">
          <Link to="/" className="logo">
            <span className="logo-text">LH</span>
            <span className="logo-subtitle">CLOTHING</span>
          </Link>
        </div>

        {/* Right - Cart, Profile */}
        <div className="header-right">

          {/* Cart */}
          <button 
            className="cart-icon"
            onClick={onCartClick}
          >
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          {/* Profile/Login */}
          <div className="profile-section">
            {isLoggedIn ? (
              <Link to="/profile" className="user-profile">
                <FaUser />
                <span className="user-name">{userProfile?.displayName || userProfile?.firstName || 'User'}</span>
              </Link>
            ) : (
              <button className="login-button" onClick={onLoginClick}>
                <FaUser />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button onClick={() => setIsMenuOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <nav className="mobile-nav">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
