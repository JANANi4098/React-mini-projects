
import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charset += "0123456789";
    if (includeSymbol) charset += "!@#$%^&*()_+";

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className='password-generator'>
      <h2>Strong password generator</h2>
      <div className='input-group'>
        <label htmlFor="num">Password Length</label>
        <input type="number" id="num" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
      </div>
      <div className='checkbox-group'>
        <label htmlFor="upper">Include Uppercase</label>
        <input type="checkbox" id="upper" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
      </div>
      <div className='checkbox-group'>
        <label htmlFor="lower">Include Lowercase</label>
        <input type="checkbox" id="lower" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
      </div>
      <div className='checkbox-group'>
        <label htmlFor="numbers">Include Numbers</label>
        <input type="checkbox" id="numbers" checked={includeNumber} onChange={(e) => setIncludeNumber(e.target.checked)} />
      </div>
      <div className='checkbox-group'>
        <label htmlFor="symbols">Include Symbols</label>
        <input type="checkbox" id="symbols" checked={includeSymbol} onChange={(e) => setIncludeSymbol(e.target.checked)} />
      </div>
      <button className='generate-password' onClick={generatePassword}>Generate Password</button>
      <div className='generated-password'>
        <input type="text" readOnly value={password} />
        <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  );
}

export default App;

