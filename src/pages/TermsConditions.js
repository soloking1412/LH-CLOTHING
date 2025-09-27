import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page">
      <div className="container">
        {/* Back Button */}
        <Link to="/" className="back-button">
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="page-header">
          <h1>TERMS AND CONDITIONS</h1>
        </div>

        {/* Terms Content */}
        <div className="terms-content">
          <section className="terms-section">
            <h2>GENERAL TERMS</h2>
            
            <div className="terms-text">
              <h3>WELCOME TO LHSTYLEHUB.IN</h3>
              <p>
                LH, OPERATED BY LH APPARELS. WE'RE AN INDEPENDENT APPAREL BRAND BASED IN INDIA,
                AND WE'VE CREATED THIS SITE AS A SPACE FOR YOU TO EXPLORE AND ENJOY OUR
                COLLECTIONS WITH EASE.
              </p>

              <p>
                BY VISITING OR SHOPPING WITH US ON THIS WEBSITE, YOU AGREE TO THE TERMS LISTED
                BELOW. THESE TERMS ARE MEANT TO GUIDE HOW OUR WEBSITE IS USED AND TO ENSURE
                A SAFE, SMOOTH, AND ENJOYABLE EXPERIENCE FOR EVERYONE.
              </p>

              <p>
                IF AT ANY POINT YOU FEEL THESE TERMS DON'T WORK FOR YOU, WE KINDLY ASK THAT YOU
                REFRAIN FROM USING OUR WEBSITE.
              </p>

              <p>
                PLEASE NOTE THAT WE MAY UPDATE THESE TERMS FROM TIME TO TIME TO SERVE YOU
                BETTER. WHENEVER CHANGES ARE MADE, THEY'LL BE REFLECTED ON THIS PAGE, SO WE
                ENCOURAGE YOU TO CHECK BACK OCCASIONALLY. BY CONTINUING TO USE OUR WEBSITE,
                YOU ACCEPT AND AGREE TO THE MOST RECENT VERSION OF THESE TERMS.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
