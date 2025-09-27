import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/posters/P-1.jpg',
      title: 'OVERSIZED DAMN TEE',
      subtitle: 'THE CULTURE GLITCH',
      description: 'Premium streetwear that speaks your language'
    },
    {
      id: 2,
      image: '/images/posters/P-2.PNG',
      title: 'OVERSIZED I CAN FLY TEE',
      subtitle: 'TRAVIS SCOTT COLLECTION',
      description: 'Elevate your style with premium oversized fits'
    },
    {
      id: 3,
      image: '/images/posters/P-3.JPG',
      title: 'OVERSIZED XO HORIZON TEE',
      subtitle: 'THE WEEKND COLLECTION',
      description: 'Unique designs for unique personalities'
    }
  ];


  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);





  return (
    <div className="home">
      {/* Hero Section - Clean Slideshow */}
      <section className="hero">
        <div className="slideshow-container">

          {/* Slides */}
          <div className="slides-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="slide-image">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "auto"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="product-categories">
        <div className="container">
          <div className="category-item">
            <div className="category-image">
              <img src="/images/products/K-1.jpg" alt="OVERSIZED KENDRICK TEE" />
            </div>
            <div className="category-link">
              <Link to="/product/1">OVERSIZED KENDRICK TEE →</Link>
            </div>
          </div>

          <div className="category-item">
            <div className="category-image">
              <img src="/images/products/T-1.jpg" alt="OVERSIZED I CAN FLY TEE" />
            </div>
            <div className="category-link">
              <Link to="/product/2">OVERSIZED I CAN FLY TEE →</Link>
            </div>
          </div>

          <div className="category-item">
            <div className="category-image">
              <img src="/images/products/W-1.jpg" alt="OVERSIZED WEEKND TEE" />
            </div>
            <div className="category-link">
              <Link to="/product/3">OVERSIZED WEEKND TEE →</Link>
            </div>
          </div>
        </div>
      </section>



      {/* Brand Story Section */}
      <section className="brand-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                LH Clothing was born from a passion for quality and style. We believe that 
                everyone deserves to wear clothing that makes them feel confident and comfortable. 
                Our collection features premium materials, thoughtful design, and timeless appeal.
              </p>
              <p>
                From our carefully curated fabrics to our attention to detail in every stitch, 
                we're committed to delivering exceptional value and style to our customers.
              </p>
              <Link to="/products" className="story-btn">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Support Button */}
      <a href="https://wa.me/919876543210" className="whatsapp-support" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Home;
