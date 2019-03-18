import React from 'react';

import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <CardBanner />
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;
