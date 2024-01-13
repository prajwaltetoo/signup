import React, { useState } from 'react';
import './styles.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = (operation) => {
    if (!num1 || !num2) {
      setMessage('Please enter both numbers.');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setMessage('Please enter valid numbers.');
      return;
    }

    switch (operation) {
      case '+':
        setResult(`Result: ${n1 + n2}`);
        setMessage('Success');
        break;
      case '-':
        setResult(`Result: ${n1 - n2}`);
        setMessage('Success');
        break;
      case '*':
        setResult(`Result: ${n1 * n2}`);
        setMessage('Success');
        break;
      case '/':
        if (n2 === 0) {
          setMessage('Error: Division by zero.');
        } else {
          setResult(`Result: ${n1 / n2}`);
          setMessage('Success');
        }
        break;
      default:
        setMessage('Invalid operation.');
        break;
    }
  };

  return (
    
    <div className="calculator">
      <div>
        <h1>React Calculator</h1>
        <label>Number 1:</label>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <label>Number 2:</label>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      
      <div className="result">
        {message && <div className="error">{message}</div>}
        {result && <div className="success">{result}</div>}
      </div>
    </div>
  );
};

export default Calculator;
