import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'OVERSIZED STARBOY TEE',
      subtitle: 'THE WEEKEND',
      price: 749,
      originalPrice: 1049,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'THE CULTURE GLITCH'
    },
    {
      id: 2,
      name: 'OVERSIZED I CAN FLY TEE',
      subtitle: 'TRAVIS SCOTT',
      price: 749,
      originalPrice: 1049,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'TRAVIS SCOTT COLLECTION'
    },
    {
      id: 3,
      name: 'OVERSIZED STAY WEIRD TEE',
      subtitle: 'MR BEAN',
      price: 749,
      originalPrice: 1049,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'MR BEAN EDITION'
    },
    {
      id: 4,
      name: 'OVERSIZED RESPECT+ TEE',
      subtitle: 'GRAND THEFT AUTO',
      price: 749,
      originalPrice: 1049,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'GTA COLLECTION'
    }
  ];

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <div className="products-page-header">
          <h1>OVERSIZED T SHIRT : (THE CULTURE GLITCH)</h1>
          <p>Premium streetwear collection featuring oversized fits and high-quality DTF prints</p>
        </div>

        {/* Products Grid - 2x2 Layout */}
        <div className="products-grid-2x2">
          {products.map((product) => (
            <div key={product.id} className="product-card-2x2">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <div className="overlay-buttons">
                    <Link to={`/product/${product.id}`} className="view-product-btn">
                      View Full Product
                    </Link>
                    <button className="quick-add-btn">
                      Quick Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="product-info-2x2">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
                
                <div className="product-price-section">
                  <span className="current-price">₹{product.price}</span>
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="discount-badge">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <div className="product-features">
                  <span className="feature">220 GSM Cotton</span>
                  <span className="feature">Oversized Fit</span>
                  <span className="feature">DTF Print</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Info */}
        <div className="collection-info">
          <div className="info-card">
            <h3>Premium Quality</h3>
            <p>220 GSM premium combed cotton for ultimate comfort and durability</p>
          </div>
          <div className="info-card">
            <h3>Oversized Fit</h3>
            <p>Relaxed oversized fit perfect for streetwear styling</p>
          </div>
          <div className="info-card">
            <h3>DTF Printing</h3>
            <p>High-quality DTF prints that stay vibrant even after multiple washes</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Ready to Rock the Streetwear Look?</h2>
          <p>Join the LH CLOTHING movement and express your unique style</p>
          <div className="cta-buttons">
            <Link to="/" className="cta-btn primary">Back to Home</Link>
            <Link to="/story" className="cta-btn secondary">Our Story</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Support Button */}
      <a href="https://wa.me/919876543210" className="whatsapp-support" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Products;
