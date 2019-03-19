import React from 'react';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import {
  ClearButton,
  CalcButton
} from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

import './App.css';

const actionButton = [
  {
    key: '1',
    icon: '÷'
  },
  {
    key: '2',
    icon: 'x'
  },
  {
    key: '3',
    icon: '-'
  },
  {
    key: '4',
    icon: '+'
  },
  {
    key: '5',
    icon: '='
  }
];

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const App = () => {
  return (
    /*<div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
   </div> */
    <div className="app">
      <CalculatorDisplay />
      <div className="buttons">
        <div className="display-buttons">
          <ClearButton />
          <div className="number-buttons">
            {numbers.map(
              num => num !== 0 && <NumberButton key={num} num={num} />
            )}
          </div>
          <div className="zero">
            {numbers.map(
              num => num === 0 && <NumberButton key={num} num={num} />
            )}
          </div>
        </div>
        <div className="calc-button">
          {actionButton.map(({key, icon}) => (
            <CalcButton key={key} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
