import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './App.css'

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(82.25);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.log("Error fetching exchange rate", error);
      }
    }
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [amount, exchangeRate]);

  const handleAmountExchange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  }

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  }

  return (
    <>
      <div className='currency-converter'>
        <div className='box'></div>
        <div className='data'></div>
        <h1>Currency converter</h1>
        <div className='input-container'>
          <label htmlFor='Amount'>Amount</label>
          <input type="number" onChange={handleAmountExchange} value={amount}></input>
          <br></br>
          <label htmlFor='fromCurrency'>From currency:</label>
          <select id='fromCurrency' onChange={handleFromCurrencyChange} value={fromCurrency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
            <option value="BRL">BRL</option>
            <option value="ZAR">ZAR</option>
          </select><br></br>
          <label htmlFor='toCurrency'>To currency:</label>
          <select id='toCurrency' onChange={handleToCurrencyChange} value={toCurrency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
            <option value="BRL">BRL</option>
            <option value="ZAR">ZAR</option>
          </select>
        </div>
        <div className='input-container'></div>
        <div className='input-container'></div>
        <div className='result'>
          <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
        </div>
      </div>
    </>
  )
}

export default App;
