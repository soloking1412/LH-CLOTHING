import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSearch, FaTruck, FaCheckCircle, FaBox, FaHome, FaClock } from 'react-icons/fa';
import './OrderTracking.css';

const OrderTracking = ({ user }) => {
  const location = useLocation();
  const [searchOrder, setSearchOrder] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [orderHistory] = useState([
    {
      orderNumber: 'LH12345678',
      date: '2024-01-15',
      status: 'delivered',
      total: 149.97,
      items: [
        {
          id: 1,
          name: 'Oversized Black Tee',
          size: 'L',
          quantity: 2,
          price: 69.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      orderNumber: 'LH87654321',
      date: '2024-01-10',
      status: 'shipped',
      total: 89.99,
      items: [
        {
          id: 2,
          name: 'Vintage White Tee',
          size: 'M',
          quantity: 1,
          price: 59.99,
          image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop'
        }
      ]
    }
  ]);

  useEffect(() => {
    // Check if there's order data from checkout
    if (location.state?.orderNumber) {
      setTrackedOrder({
        orderNumber: location.state.orderNumber,
        date: new Date().toISOString().split('T')[0],
        status: 'processing',
        total: location.state.orderDetails?.total || 0,
        items: [],
        estimatedDelivery: '2024-01-25'
      });
    }
  }, [location.state]);

  const handleSearch = async () => {
    if (!searchOrder.trim()) return;

    setIsSearching(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock order data - in real app this would come from API
      const mockOrder = {
        orderNumber: searchOrder.toUpperCase(),
        date: '2024-01-20',
        status: 'shipped',
        total: 129.98,
        items: [
          {
            id: 3,
            name: 'Urban Gray Tee',
            size: 'XL',
            quantity: 1,
            price: 74.99,
            image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=100&h=100&fit=crop'
          }
        ],
        estimatedDelivery: '2024-01-27'
      };
      
      setTrackedOrder(mockOrder);
    } catch (error) {
      console.error('Error searching order:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing':
        return <FaClock className="status-icon processing" />;
      case 'shipped':
        return <FaTruck className="status-icon shipped" />;
      case 'delivered':
        return <FaCheckCircle className="status-icon delivered" />;
      default:
        return <FaBox className="status-icon" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'var(--medium-gray)';
      case 'shipped':
        return 'var(--primary-black)';
      case 'delivered':
        return '#28a745';
      default:
        return 'var(--medium-gray)';
    }
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="order-tracking-page">
      <div className="container">
        <div className="tracking-header">
          <h1>Order Tracking</h1>
          <p>Track your orders and view order history</p>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter your order number (e.g., LH12345678)"
              value={searchOrder}
              onChange={(e) => setSearchOrder(e.target.value)}
              className="search-input"
            />
            <button
              className="btn btn-primary search-btn"
              onClick={handleSearch}
              disabled={isSearching || !searchOrder.trim()}
            >
              {isSearching ? (
                <>
                  <div className="loading-spinner"></div>
                  Searching...
                </>
              ) : (
                <>
                  <FaSearch />
                  Track Order
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tracked Order */}
        {trackedOrder && (
          <div className="tracked-order">
            <div className="order-header">
              <h2>Order #{trackedOrder.orderNumber}</h2>
              <div className="order-meta">
                <span>Placed on {formatDate(trackedOrder.date)}</span>
                <span>Total: {formatPrice(trackedOrder.total)}</span>
              </div>
            </div>

            {/* Order Status */}
            <div className="order-status">
              <div className="status-header">
                {getStatusIcon(trackedOrder.status)}
                <h3>Order Status: {getStatusText(trackedOrder.status)}</h3>
              </div>
              
              {trackedOrder.estimatedDelivery && (
                <p className="estimated-delivery">
                  Estimated Delivery: {formatDate(trackedOrder.estimatedDelivery)}
                </p>
              )}

              {/* Status Timeline */}
              <div className="status-timeline">
                <div className={`timeline-step ${trackedOrder.status === 'processing' || trackedOrder.status === 'shipped' || trackedOrder.status === 'delivered' ? 'completed' : ''}`}>
                  <div className="step-icon">
                    <FaBox />
                  </div>
                  <div className="step-content">
                    <h4>Order Placed</h4>
                    <p>Your order has been confirmed</p>
                  </div>
                </div>

                <div className={`timeline-step ${trackedOrder.status === 'shipped' || trackedOrder.status === 'delivered' ? 'completed' : ''}`}>
                  <div className="step-icon">
                    <FaTruck />
                  </div>
                  <div className="step-content">
                    <h4>Shipped</h4>
                    <p>Your order is on its way</p>
                  </div>
                </div>

                <div className={`timeline-step ${trackedOrder.status === 'delivered' ? 'completed' : ''}`}>
                  <div className="step-icon">
                    <FaHome />
                  </div>
                  <div className="step-content">
                    <h4>Delivered</h4>
                    <p>Your order has arrived</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            {trackedOrder.items.length > 0 && (
              <div className="order-items">
                <h3>Order Items</h3>
                <div className="items-list">
                  {trackedOrder.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Size: {item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Order History */}
        <div className="order-history">
          <h2>Order History</h2>
          <div className="history-list">
            {orderHistory.map((order) => (
              <div key={order.orderNumber} className="history-item">
                <div className="history-header">
                  <div className="order-info">
                    <h3>Order #{order.orderNumber}</h3>
                    <p>Placed on {formatDate(order.date)}</p>
                  </div>
                  <div className="order-status-badge">
                    {getStatusIcon(order.status)}
                    <span style={{ color: getStatusColor(order.status) }}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
                
                <div className="history-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="history-item-detail">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>Size: {item.size} | Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="history-footer">
                  <span className="order-total">Total: {formatPrice(order.total)}</span>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setTrackedOrder(order)}
                  >
                    Track This Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Orders Message */}
        {!trackedOrder && orderHistory.length === 0 && (
          <div className="no-orders">
            <FaBox />
            <h3>No Orders Yet</h3>
            <p>Start shopping to see your order history here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
