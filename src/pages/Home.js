import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaPlay } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'OVERSIZED STARBOY TEE',
      subtitle: 'THE CULTURE GLITCH',
      description: 'Premium streetwear that speaks your language'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      title: 'OVERSIZED I CAN FLY TEE',
      subtitle: 'TRAVIS SCOTT COLLECTION',
      description: 'Elevate your style with premium oversized fits'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'OVERSIZED STAY WEIRD TEE',
      subtitle: 'MR BEAN EDITION',
      description: 'Unique designs for unique personalities'
    }
  ];

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToSlideIndex = (index) => {
    goToSlide(index);
  };

  return (
    <div className="home">
      {/* Hero Section with Poster Slider */}
      <section className="hero-section">
        <div className="slider-container">
          <div className="slider-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-content">
                  <div className="slide-text">
                    <h1 className="slide-title">{slide.title}</h1>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-description">{slide.description}</p>
                    <Link to="/products" className="explore-now-btn">
                      <FaPlay />
                      <span>EXPLORE NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="slider-nav prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="slider-nav next" onClick={nextSlide}>
            <FaChevronRight />
          </button>

          {/* Dots for Manual Swipe */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlideIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>FEATURED PRODUCTS</h2>
            <p>Discover our latest oversized streetwear collection</p>
          </div>
          
          <div className="products-grid">
            <div className="product-card featured">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="StarBoy Tee" />
                <div className="product-overlay">
                  <Link to="/product/1" className="view-product-btn">View Product</Link>
                </div>
              </div>
              <div className="product-info">
                <h3>OVERSIZED STARBOY TEE</h3>
                <p className="product-subtitle">THE WEEKEND</p>
                <div className="product-price">
                  <span className="current-price">₹749</span>
                  <span className="original-price">₹1049</span>
                </div>
              </div>
            </div>

            <div className="product-card featured">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="I Can Fly Tee" />
                <div className="product-overlay">
                  <Link to="/product/2" className="view-product-btn">View Product</Link>
                </div>
              </div>
              <div className="product-info">
                <h3>OVERSIZED I CAN FLY TEE</h3>
                <p className="product-subtitle">TRAVIS SCOTT</p>
                <div className="product-price">
                  <span className="current-price">₹749</span>
                  <span className="original-price">₹1049</span>
                </div>
              </div>
            </div>

            <div className="product-card featured">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Stay Weird Tee" />
                <div className="product-overlay">
                  <Link to="/product/3" className="view-product-btn">View Product</Link>
                </div>
              </div>
              <div className="product-info">
                <h3>OVERSIZED STAY WEIRD TEE</h3>
                <p className="product-subtitle">MR BEAN</p>
                <div className="product-price">
                  <span className="current-price">₹749</span>
                  <span className="original-price">₹1049</span>
                </div>
              </div>
            </div>

            <div className="product-card featured">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Respect+ Tee" />
                <div className="product-overlay">
                  <Link to="/product/4" className="view-product-btn">View Product</Link>
                </div>
              </div>
              <div className="product-info">
                <h3>OVERSIZED RESPECT+ TEE</h3>
                <p className="product-subtitle">GRAND THEFT AUTO</p>
                <div className="product-price">
                  <span className="current-price">₹749</span>
                  <span className="original-price">₹1049</span>
                </div>
              </div>
            </div>
          </div>

          <div className="view-all-container">
            <Link to="/products" className="view-all-btn">
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>BEHIND LH - STORY</h2>
              <p>
                LH CLOTHING is more than just streetwear—it's a movement. Born from the culture 
                of oversized fits and premium quality, we create tees that speak to the 
                individuality in all of us. Each piece is crafted with 220 GSM premium combed 
                cotton and high-quality DTF prints that last.
              </p>
              <p>
                Our mission is simple: deliver exceptional streetwear that doesn't compromise 
                on comfort, quality, or style. From THE CULTURE GLITCH to TRAVIS SCOTT 
                collections, every design tells a story.
              </p>
              <Link to="/story" className="story-btn">
                READ OUR STORY
              </Link>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="LH Story" />
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
