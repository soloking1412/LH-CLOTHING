import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaShare, FaHeart, FaStar, FaCheck, FaTimes } from 'react-icons/fa';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Product data based on the specification
  const products = {
    1: {
      id: 1,
      name: 'OVERSIZED STARBOY TEE',
      subtitle: 'THE WEEKEND',
      price: 749,
      originalPrice: 1049,
      images: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['M', 'L', 'XL', 'XXL'],
      fabric: '220 GSM, 100% Combed Cotton (Single Jersey)',
      fit: 'Relaxed Oversized Fit for streetwear styling',
      finish: 'Bio-Washed & Pre-Shrunk for long-lasting softness',
      neckline: 'Durable Ribbed Crew Neck',
      stitching: 'Double-stitched for extra strength & durability',
      breathability: 'Lightweight yet premium, perfect for Indian weather',
      print: 'High-Quality DTF Print (crack-resistant, vibrant colors, long-lasting even after multiple wash)',
      washCare: [
        'Machine wash cold (30°C) with similar colors',
        'Use mild detergent only',
        'Avoid bleach & fabric softeners (to protect the DTF print)'
      ],
      drying: [
        'Do not tumble dry',
        'Dry in shade to maintain fabric & print quality'
      ],
      ironing: [
        'Iron inside out on low heat',
        'Never iron directly on DTF print'
      ],
      storage: [
        'Fold neatly (avoid stretching)',
        'Store in a cool, dry place'
      ],
      returnPolicy: 'Our tees are a one-way love affair. Once they\'re yours, they stay yours—no returns, no take-backs. Just endless vibes. We put a lot of care into every piece we create. Since each order is made especially for you, we don\'t accept returns or exchanges. Please check the size chart before ordering.',
      reviews: [
        { id: 1, name: 'Rahul S.', rating: 5, comment: 'Perfect fit and amazing quality! The oversized look is exactly what I wanted.', date: '2024-01-15' },
        { id: 2, name: 'Priya M.', rating: 5, comment: 'Love the fabric and the print quality. Highly recommend!', date: '2024-01-10' },
        { id: 3, name: 'Aryan K.', rating: 4, comment: 'Great streetwear vibes. The fit is perfect for my style.', date: '2024-01-08' }
      ]
    },
    2: {
      id: 2,
      name: 'OVERSIZED I CAN FLY TEE',
      subtitle: 'TRAVIS SCOTT',
      price: 749,
      originalPrice: 1049,
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['M', 'L', 'XL', 'XXL'],
      fabric: '220 GSM, 100% Combed Cotton (Single Jersey)',
      fit: 'Relaxed Oversized Fit for streetwear styling',
      finish: 'Bio-Washed & Pre-Shrunk for long-lasting softness',
      neckline: 'Durable Ribbed Crew Neck',
      stitching: 'Double-stitched for extra strength & durability',
      breathability: 'Lightweight yet premium, perfect for Indian weather',
      print: 'High-Quality DTF Print (crack-resistant, vibrant colors, long-lasting even after multiple wash)',
      washCare: [
        'Machine wash cold (30°C) with similar colors',
        'Use mild detergent only',
        'Avoid bleach & fabric softeners (to protect the DTF print)'
      ],
      drying: [
        'Do not tumble dry',
        'Dry in shade to maintain fabric & print quality'
      ],
      ironing: [
        'Iron inside out on low heat',
        'Never iron directly on DTF print'
      ],
      storage: [
        'Fold neatly (avoid stretching)',
        'Store in a cool, dry place'
      ],
      returnPolicy: 'Our tees are a one-way love affair. Once they\'re yours, they stay yours—no returns, no take-backs. Just endless vibes. We put a lot of care into every piece we create. Since each order is made especially for you, we don\'t accept returns or exchanges. Please check the size chart before ordering.',
      reviews: [
        { id: 1, name: 'Vikram R.', rating: 5, comment: 'Travis Scott vibes! The quality is top-notch.', date: '2024-01-12' },
        { id: 2, name: 'Neha P.', rating: 5, comment: 'Perfect oversized fit and amazing print quality.', date: '2024-01-09' }
      ]
    },
    3: {
      id: 3,
      name: 'OVERSIZED STAY WEIRD TEE',
      subtitle: 'MR BEAN',
      price: 749,
      originalPrice: 1049,
      images: [
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['M', 'L', 'XL', 'XXL'],
      fabric: '220 GSM, 100% Combed Cotton (Single Jersey)',
      fit: 'Relaxed Oversized Fit for streetwear styling',
      finish: 'Bio-Washed & Pre-Shrunk for long-lasting softness',
      neckline: 'Durable Ribbed Crew Neck',
      stitching: 'Double-stitched for extra strength & durability',
      breathability: 'Lightweight yet premium, perfect for Indian weather',
      print: 'High-Quality DTF Print (crack-resistant, vibrant colors, long-lasting even after multiple wash)',
      washCare: [
        'Machine wash cold (30°C) with similar colors',
        'Use mild detergent only',
        'Avoid bleach & fabric softeners (to protect the DTF print)'
      ],
      drying: [
        'Do not tumble dry',
        'Dry in shade to maintain fabric & print quality'
      ],
      ironing: [
        'Iron inside out on low heat',
        'Never iron directly on DTF print'
      ],
      storage: [
        'Fold neatly (avoid stretching)',
        'Store in a cool, dry place'
      ],
      returnPolicy: 'Our tees are a one-way love affair. Once they\'re yours, they stay yours—no returns, no take-backs. Just endless vibes. We put a lot of care into every piece we create. Since each order is made especially for you, we don\'t accept returns or exchanges. Please check the size chart before ordering.',
      reviews: [
        { id: 1, name: 'Arjun M.', rating: 5, comment: 'Mr Bean vibes! Love the quirky design.', date: '2024-01-14' },
        { id: 2, name: 'Zara K.', rating: 4, comment: 'Great quality and comfortable fit.', date: '2024-01-11' }
      ]
    },
    4: {
      id: 4,
      name: 'OVERSIZED RESPECT+ TEE',
      subtitle: 'GRAND THEFT AUTO',
      price: 749,
      originalPrice: 1049,
      images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['M', 'L', 'XL', 'XXL'],
      fabric: '220 GSM, 100% Combed Cotton (Single Jersey)',
      fit: 'Relaxed Oversized Fit for streetwear styling',
      finish: 'Bio-Washed & Pre-Shrunk for long-lasting softness',
      neckline: 'Durable Ribbed Crew Neck',
      stitching: 'Double-stitched for extra strength & durability',
      breathability: 'Lightweight yet premium, perfect for Indian weather',
      print: 'High-Quality DTF Print (crack-resistant, vibrant colors, long-lasting even after multiple wash)',
      washCare: [
        'Machine wash cold (30°C) with similar colors',
        'Use mild detergent only',
        'Avoid bleach & fabric softeners (to protect the DTF print)'
      ],
      drying: [
        'Do not tumble dry',
        'Dry in shade to maintain fabric & print quality'
      ],
      ironing: [
        'Iron inside out on low heat',
        'Never iron directly on DTF print'
      ],
      storage: [
        'Fold neatly (avoid stretching)',
        'Store in a cool, dry place'
      ],
      returnPolicy: 'Our tees are a one-way love affair. Once they\'re yours, they stay yours—no returns, no take-backs. Just endless vibes. We put a lot of care into every piece we create. Since each order is made especially for you, we don\'t accept returns or exchanges. Please check the size chart before ordering.',
      reviews: [
        { id: 1, name: 'Rohan D.', rating: 5, comment: 'GTA vibes! The print quality is insane.', date: '2024-01-13' },
        { id: 2, name: 'Ananya S.', rating: 5, comment: 'Perfect oversized fit and amazing streetwear look.', date: '2024-01-10' }
      ]
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="product-details">
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/products" className="back-to-products">Back to Products</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart({
      ...product,
      selectedSize,
      quantity
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this amazing ${product.name} from LH CLOTHING!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <div className="product-details">
      <div className="container">
        {/* Back Button */}
        <Link to="/products" className="back-button">
          <FaArrowLeft />
          <span>Back to Products</span>
        </Link>

        <div className="product-layout">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[activeImage]} alt={product.name} />
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <h1 className="product-name">{product.name}</h1>
              <p className="product-subtitle">{product.subtitle}</p>
              
              {/* Rating */}
              <div className="product-rating">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= averageRating ? 'star filled' : 'star'}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {averageRating.toFixed(1)} ({product.reviews.length} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="product-price">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="size-selection">
              <div className="size-header">
                <h3>Select Size</h3>
                <button 
                  className="size-guide-btn"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                >
                  Size Guide
                </button>
              </div>
              
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Size Guide Modal */}
              {showSizeGuide && (
                <div className="size-guide-modal">
                  <div className="size-guide-content">
                    <div className="size-guide-header">
                      <h3>Size Guide</h3>
                      <button onClick={() => setShowSizeGuide(false)}>
                        <FaTimes />
                      </button>
                    </div>
                    <div className="size-chart">
                      <table>
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>Chest (inches)</th>
                            <th>Length (inches)</th>
                            <th>Shoulder (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>M</td>
                            <td>42-44</td>
                            <td>28-29</td>
                            <td>18-19</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>44-46</td>
                            <td>29-30</td>
                            <td>19-20</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>46-48</td>
                            <td>30-31</td>
                            <td>20-21</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>48-50</td>
                            <td>31-32</td>
                            <td>21-22</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selection */}
            <div className="quantity-selection">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <FaShoppingCart />
                Add to Cart
              </button>
              
              <button className="wishlist-btn">
                <FaHeart />
              </button>
              
              <button className="share-btn" onClick={handleShare}>
                <FaShare />
              </button>
            </div>

            {/* Return Policy */}
            <div className="return-policy">
              <h3>Return Policy</h3>
              <p>{product.returnPolicy}</p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-details-tabs">
          <div className="tab-content">
            <div className="tab-section">
              <h3>Product Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <strong>Fabric:</strong> {product.fabric}
                </div>
                <div className="detail-item">
                  <strong>Fit:</strong> {product.fit}
                </div>
                <div className="detail-item">
                  <strong>Finish:</strong> {product.finish}
                </div>
                <div className="detail-item">
                  <strong>Neckline:</strong> {product.neckline}
                </div>
                <div className="detail-item">
                  <strong>Stitching:</strong> {product.stitching}
                </div>
                <div className="detail-item">
                  <strong>Breathability:</strong> {product.breathability}
                </div>
                <div className="detail-item">
                  <strong>Print:</strong> {product.print}
                </div>
              </div>
            </div>

            <div className="tab-section">
              <h3>Aftercare Instructions</h3>
              
              <div className="care-section">
                <h4>Wash Care</h4>
                <ul>
                  {product.washCare.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="care-section">
                <h4>Drying</h4>
                <ul>
                  {product.drying.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="care-section">
                <h4>Ironing</h4>
                <ul>
                  {product.ironing.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="care-section">
                <h4>Storage</h4>
                <ul>
                  {product.storage.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tab-section">
              <h3>Customer Reviews</h3>
              <div className="reviews-container">
                {product.reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>{review.name}</h4>
                        <div className="review-stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={star <= review.rating ? 'star filled' : 'star'}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
