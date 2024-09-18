import React, { useState } from 'react';
import { passwordGenerator } from './utils.js';

function App() {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(8);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const generatePassword = () => {
    const options = [isUpperCase, isLowerCase, isNum, isSymbols];
    const defaultOptions = options.every((el) => !el);
    const newPassword = passwordGenerator(
      Number(passLength),
      defaultOptions || isUpperCase,
      defaultOptions || isLowerCase,
      defaultOptions || isNum,
      defaultOptions || isSymbols
    );

    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="container">
      <div className="header-container">
        <h2>Password Length: {passLength}</h2>
      </div>
      <div className="input-container">
        <input
          type="range"
          min={6}
          max={16}
          value={passLength}
          onChange={(e) => setPassLength(e.target.value)}
        />
      </div>
      <div className="input-content">
        <input
          type="checkbox"
          id="upper"
          onChange={({ target }) => setIsUpperCase(target.checked)}
          aria-label="Include uppercase letters"
        />
        <label htmlFor="upper">Uppercase Letters</label>

        <input
          type="checkbox"
          id="lower"
          onChange={({ target }) => setIsLowerCase(target.checked)}
          aria-label="Include lowercase letters"
        />
        <label htmlFor="lower">Lowercase Letters</label>

        <input
          type="checkbox"
          id="numbers"
          onChange={({ target }) => setIsNum(target.checked)}
          aria-label="Include numbers"
        />
        <label htmlFor="numbers">Numbers</label>

        <input
          type="checkbox"
          id="symbols"
          onChange={({ target }) => setIsSymbols(target.checked)}
          aria-label="Include symbols"
        />
        <label htmlFor="symbols">Symbols</label>
      </div>
      <div className="btn-container">
        <button onClick={generatePassword}>Generate Password</button>
      </div>
      <div className="display-container">
        <h2>Password: {password}  <button onClick={handleCopy} disabled={!password}>
          Copy Password
        </button></h2>
       
        <h2>Password Length: {password.length}</h2>
      </div>
    </div>
  );
}

export default App;
