import React from 'react';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
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

const numbers = ['clear', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <div className="buttons">
        <div className="left">
          <div className="clear">
            {numbers.map(
              num => num === 'clear' && <NumberButton key={num} num={num} />
            )}
          </div>
          <div className="number-buttons">
            {numbers.map(
              num =>
                num !== 0 &&
                num !== 'clear' && <NumberButton key={num} num={num} />
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
            <ActionButton key={key} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
