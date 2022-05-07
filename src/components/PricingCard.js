import React from 'react';

function PricingCard({ title, price, minUser, listTitle, children }) {
  return (
    <div className="component__pricing-card">
      <div className="component__pricing-container">
        <div className="component__pricing-header">
          <h3>{title}</h3>
          <p className="component__pricing-price">€{price}</p>
          <p>
            per user and month
            <br />
            Starts at {minUser} users
          </p>
        </div>
        <h4>{listTitle}:</h4>
        <ul>{children}</ul>
      </div>
    </div>
  );
}

export default PricingCard;
