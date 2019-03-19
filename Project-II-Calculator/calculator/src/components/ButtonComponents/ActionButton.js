import React from 'react';
import './Button.css';

const ActionButton = ({icon}) => {
  return (
    <a className="math-button">
      <button>{icon}</button>
    </a>
  );
};

export default ActionButton;
