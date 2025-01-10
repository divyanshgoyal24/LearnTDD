// src/App.js
import React, { useState } from 'react';
import './App.css';
import add from './Utils/Add';  // Import the add function

function App() {
  // State to hold the input string and the result
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle form submission (calculating the sum)
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      // Call the add function and set the result
      const sum = add(input);
      setResult(sum);
      setError('');  // Clear any previous errors
    } catch (err) {
      // Handle any errors (negative numbers, etc.)
      setError(err.message);
      setResult(null);  // Clear the previous result if there's an error
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numbers">Enter numbers (comma or newline separated):</label>
          <textarea
            id="numbers"
            value={input}
            onChange={handleInputChange}
            rows="5"
            cols="30"
            placeholder="Enter numbers here"
          />
        </div>

        <button type="submit">Calculate Sum</button>
      </form>

      {result !== null && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}

      {error && (
        <div style={{ color: 'red' }}>
          <h3>Error: {error}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
