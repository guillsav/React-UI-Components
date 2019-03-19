import React from 'react';
import './Button.css';

export const ClearButton = () => {
  return (
    <a className="clear-button">
      <button>clear</button>
    </a>
  );
};

export const CalcButton = ({icon}) => {
  return (
    <a className="math-button">
      <button>{icon}</button>
    </a>
  );
};
