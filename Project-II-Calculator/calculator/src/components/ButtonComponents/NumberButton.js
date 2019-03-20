import React from 'react';
import './Button.css';

const NumberButton = ({num}) => {
  return (
    <a className="pad">
      <button>{num}</button>
    </a>
  );
};

export default NumberButton;
