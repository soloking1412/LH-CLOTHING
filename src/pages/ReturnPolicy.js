import React, { useState, useEffect } from 'react';
import { FaHeart, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaShieldAlt, FaTimes, FaArrowRight } from 'react-icons/fa';
import './ReturnPolicy.css';

const ReturnPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSections, setAnimatedSections] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate sections one by one
    const sections = [0, 1, 2, 3, 4];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setAnimatedSections(prev => [...prev, section]);
      }, index * 300);
    });
  }, []);

  return (
    <div className={`return-policy-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        {/* Page Header */}
        <div className={`return-policy-page-header ${animatedSections.includes(0) ? 'animate-in' : ''}`}>
          <h1>Return Policy</h1>
          <p>Our commitment to quality and your satisfaction</p>
        </div>

        {/* Main Policy Section */}
        <div className="policy-main">
          <div className={`policy-hero ${animatedSections.includes(1) ? 'animate-in' : ''}`}>
            <div className="hero-icon">
              <FaHeart />
            </div>
            <h2>Our tees are a one-way love affair</h2>
            <p className="hero-text">
              Once they're yours, they stay yours—no returns, no take-backs. Just endless vibes.
            </p>
          </div>

          <div className="policy-content">
            <div className={`policy-section ${animatedSections.includes(2) ? 'animate-in' : ''}`}>
              <div className="section-header">
                <FaInfoCircle className="section-icon" />
                <h3>Why No Returns?</h3>
              </div>
              <p>
                We put a lot of care into every piece we create. Since each order is made especially for you, 
                we don't accept returns or exchanges. Every tee is crafted with love and attention to detail, 
                ensuring you get a premium product that's worth keeping forever.
              </p>
            </div>

            <div className={`policy-section ${animatedSections.includes(2) ? 'animate-in' : ''}`}>
              <div className="section-header">
                <FaExclamationTriangle className="section-icon" />
                <h3>Important: Check Your Size</h3>
              </div>
              <p>
                <strong>Please check the size chart before ordering.</strong> Since we don't offer returns or exchanges, 
                picking the right size is crucial. Our oversized fit is designed to look great on everyone, 
                but we want you to be completely satisfied with your choice.
              </p>
            </div>

            <div className={`policy-section ${animatedSections.includes(2) ? 'animate-in' : ''}`}>
              <div className="section-header">
                <FaCheckCircle className="section-icon" />
                <h3>Quality Guarantee</h3>
              </div>
              <p>
                While we don't accept returns, we stand behind the quality of our products. If you receive 
                a defective item (printing issues, fabric defects, etc.), please contact our support team 
                within 7 days of receiving your order for assistance.
              </p>
            </div>
          </div>

          {/* Policy Summary */}
          <div className={`policy-summary ${animatedSections.includes(3) ? 'animate-in' : ''}`}>
            <h3>Policy Summary</h3>
            <ul>
              <li className="summary-item">
                <span className="item-icon">❌</span>
                <span>No returns or exchanges accepted</span>
              </li>
              <li className="summary-item">
                <span className="item-icon">❌</span>
                <span>All sales are final</span>
              </li>
              <li className="summary-item">
                <span className="item-icon">✅</span>
                <span>Check size chart before ordering</span>
              </li>
              <li className="summary-item">
                <span className="item-icon">✅</span>
                <span>Quality guarantee for defective items</span>
              </li>
              <li className="summary-item">
                <span className="item-icon">✅</span>
                <span>Contact support within 7 days for defects</span>
              </li>
            </ul>
            <div className="summary-decoration">
              <FaShieldAlt className="shield-icon" />
            </div>
          </div>

          {/* Contact Information */}
          <div className={`contact-section ${animatedSections.includes(4) ? 'animate-in' : ''}`}>
            <h3>Need Help?</h3>
            <p>
              If you have any questions about our return policy or need assistance with a defective item, 
              please don't hesitate to reach out to our support team.
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> lhstylehub@gmail.com</p>
              <p><strong>Response Time:</strong> Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
