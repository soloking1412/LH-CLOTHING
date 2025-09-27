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
      image: '/images/products/K-1.jpg',
      title: 'OVERSIZED KENDRICK TEE',
      subtitle: 'THE CULTURE GLITCH',
      description: 'Premium streetwear that speaks your language'
    },
    {
      id: 2,
      image: '/images/products/T-1.jpg',
      title: 'OVERSIZED I CAN FLY TEE',
      subtitle: 'TRAVIS SCOTT COLLECTION',
      description: 'Elevate your style with premium oversized fits'
    },
    {
      id: 3,
      image: '/images/products/W-1.jpg',
      title: 'OVERSIZED WEEKND TEE',
      subtitle: 'THE WEEKND COLLECTION',
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
      {/* Hero Section - Clean Slideshow */}
      <section className="hero">
        <div className="slideshow-container">
          {/* Navigation Controls */}
          <div className="slideshow-controls">
            <button 
              className="nav-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            
            <div className="slide-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlideIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
            
          </div>

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
                
                <div className="slide-content">
                  <div className="slide-text">
                    <h1 className="slide-title">{slide.title}</h1>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-description">{slide.description}</p>
                    <Link to="/products" className="explore-btn">
                      <FaPlay />
                      <span>EXPLORE NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
          </div>
          
            <div className="grid product-grid contains-card contains-card--product contains-card--standard grid--4-col-desktop grid--2-col-tablet-down slider slider--desktop">
              <div className="grid__item slider__slide">
                <div className="card-wrapper product-card-wrapper underline-links-hover">
                  <div className="card card--standard card--media">
                    <div className="card__inner color-scheme-1 gradient">
                      <div className="card__media">
                        <div className="media media--transparent media--hover-effect">
                          <img src="/images/products/K-1.jpg" alt="OVERSIZED KENDRICK TEE" />
                        </div>
                      </div>
                      <div className="card__content">
                        <div className="card__information">
                          <h3 className="card__heading">
                            <Link to="/product/1" className="full-unstyled-link">OVERSIZED KENDRICK TEE</Link>
                          </h3>
                          <p className="product-subtitle">THE CULTURE GLITCH</p>
                          <div className="product-price">
                            <span className="current-price">₹749</span>
                            <span className="original-price">₹1049</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid__item slider__slide">
                <div className="card-wrapper product-card-wrapper underline-links-hover">
                  <div className="card card--standard card--media">
                    <div className="card__inner color-scheme-1 gradient">
                      <div className="card__media">
                        <div className="media media--transparent media--hover-effect">
                          <img src="/images/products/T-1.jpg" alt="OVERSIZED I CAN FLY TEE" />
                        </div>
                      </div>
                      <div className="card__content">
                        <div className="card__information">
                          <h3 className="card__heading">
                            <Link to="/product/2" className="full-unstyled-link">OVERSIZED I CAN FLY TEE</Link>
                          </h3>
                          <p className="product-subtitle">TRAVIS SCOTT</p>
                          <div className="product-price">
                            <span className="current-price">₹749</span>
                            <span className="original-price">₹1049</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid__item slider__slide">
                <div className="card-wrapper product-card-wrapper underline-links-hover">
                  <div className="card card--standard card--media">
                    <div className="card__inner color-scheme-1 gradient">
                      <div className="card__media">
                        <div className="media media--transparent media--hover-effect">
                          <img src="/images/products/W-1.jpg" alt="OVERSIZED WEEKND TEE" />
                        </div>
                      </div>
                      <div className="card__content">
                        <div className="card__information">
                          <h3 className="card__heading">
                            <Link to="/product/3" className="full-unstyled-link">OVERSIZED WEEKND TEE</Link>
                          </h3>
                          <p className="product-subtitle">THE WEEKND COLLECTION</p>
                          <div className="product-price">
                            <span className="current-price">₹749</span>
                            <span className="original-price">₹1049</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

      {/* Promotional Posters Section */}
      <section className="posters-section">
        <div className="container">
          <div className="posters-grid">
            <div className="poster-item">
              <img src="/images/posters/P-1.jpg" alt="Promotional Poster 1" />
            </div>
            <div className="poster-item">
              <img src="/images/posters/P-2.PNG" alt="Promotional Poster 2" />
            </div>
            <div className="poster-item">
              <img src="/images/posters/P-3.JPG" alt="Promotional Poster 3" />
            </div>
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
