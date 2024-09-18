import React, { useState } from "react";
import { passwordGenerator } from "./utils.js";
const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);

  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  function passwordGen() {
    const options = [isUpperCase, isLowerCase, isNumber, isSymbols];
    const isOptions = options.every((el) => !el);
    if (isOptions) {
      const newPassword = passwordGenerator(
        passwordLength,
        true,
        true,
        true,
        true
      );
      setPassword(newPassword);
    } else {
      const newPassword = passwordGenerator(
        passwordLength,
        isUpperCase,
        isLowerCase,
        isNumber,
        isSymbols
      );
      setPassword(newPassword);
    }
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(password)
      .then((text) => alert("password copied from the screen!"))
      .catch((err) => console.log("Error", err));
  }
  return (
    <div className='container'>
      <div className='header-container'>
        <h2>Password input Length : {passwordLength}</h2>
      </div>
      <div className='input-container'>
        <input
          type='range'
          min={6}
          max={16}
          value={passwordLength}
          onChange={(e) => {
            setPasswordLength(e.target.value);
          }}
        />
      </div>
      <div className='checkbox-container'>
        <input
          type='checkbox'
          id='upperCase'
          onChange={(e) => setIsUpperCase(e.target.checked)}
        />
        <label htmlFor='upperCase'>UpperCase latter</label>

        <input
          type='checkbox'
          id='lowerCase'
          onChange={(e) => setIsLowerCase(e.target.checked)}
        />
        <label htmlFor='lowerCase'>LowerCase latter</label>

        <input
          type='checkbox'
          id='number'
          onChange={(e) => setIsNumber(e.target.checked)}
        />
        <label htmlFor='number'>Number</label>

        <input
          type='checkbox'
          id='symbol'
          onChange={(e) => setIsSymbols(e.target.checked)}
        />
        <label htmlFor='symbol'>Symbols</label>
      </div>
      <div className='generator-button'>
        <button onClick={passwordGen}>Password Generator</button>
      </div>

      <div className='display-container'>
        <h2>
          Password : {password} :{" "}
          <button onClick={handleCopy} disabled={!password}>
            copy password
          </button>
        </h2>
        <h2>Password Length : {password.length}</h2>
      </div>
    </div>
  );
};

export default App;
