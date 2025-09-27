import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaGift, FaFire, FaStar } from 'react-icons/fa';
import './Polo.css';

const Polo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="polo-page">
      <div className="container">
        {/* Hero Section with Countdown */}
        <section className="polo-hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="festival-badge">
                <FaFire className="fire-icon" />
                <span>GRAND FESTIVAL LAUNCH</span>
              </div>
              
              <h1 className="hero-title">
                PREMIUM POLO COLLECTION
                <span className="highlight">COMING SOON</span>
              </h1>
              
              <p className="hero-description">
                Get ready for the most exclusive polo collection launch. 
                Premium quality, unique designs, and festival vibes await you.
              </p>

              {/* Countdown Timer */}
              <div className="countdown-container">
                <div className="countdown-title">
                  <FaBell className="bell-icon" />
                  <span>LAUNCH COUNTDOWN</span>
                </div>
                
                <div className="countdown-timer">
                  <div className="time-unit">
                    <div className="time-value">{timeLeft.days}</div>
                    <div className="time-label">DAYS</div>
                  </div>
                  
                  <div className="time-separator">:</div>
                  
                  <div className="time-unit">
                    <div className="time-value">{timeLeft.hours}</div>
                    <div className="time-label">HOURS</div>
                  </div>
                  
                  <div className="time-separator">:</div>
                  
                  <div className="time-unit">
                    <div className="time-value">{timeLeft.minutes}</div>
                    <div className="time-label">MINUTES</div>
                  </div>
                  
                  <div className="time-separator">:</div>
                  
                  <div className="time-unit">
                    <div className="time-value">{timeLeft.seconds}</div>
                    <div className="time-label">SECONDS</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-actions">
                <button className="notify-btn">
                  <FaBell />
                  <span>NOTIFY ME</span>
                </button>
                
                <Link to="/products" className="explore-btn">
                  <FaGift />
                  <span>EXPLORE T-SHIRTS</span>
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <div className="polo-preview">
                <div className="preview-card">
                  <div className="preview-image">
                    <div className="coming-soon-overlay">
                      <FaStar className="star-icon" />
                      <span>COMING SOON</span>
                    </div>
                  </div>
                  <div className="preview-info">
                    <h3>PREMIUM POLO</h3>
                    <p>Festival Collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="polo-features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Premium Quality</h3>
              <p>Made with the finest materials and craftsmanship for ultimate comfort and style.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaFire />
              </div>
              <h3>Festival Vibes</h3>
              <p>Designed for the grand festival launch with unique patterns and vibrant colors.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaGift />
              </div>
              <h3>Exclusive Launch</h3>
              <p>Be the first to experience our premium polo collection with special launch offers.</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get notified when our premium polo collection launches</p>
            
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="subscribe-btn">
                <FaBell />
                <span>SUBSCRIBE</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Polo;
