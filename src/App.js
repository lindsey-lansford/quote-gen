import './App.css';

import { useState, useEffect } from "react";

// function that shuffles the target(quotes) and then returns that value at random
const shuffleQuotes = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const App = () => {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

// Making HTTP request from external API w/ useEffect hook
// Then fetched data will be set in local state 'quotes'
// Then take that array of 'quotes' and use a function to select a random item within that array(in this instance at the index of [22]) and put it in another state variable 'quote' that will be displayed to user
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[22]);
      })
  }, []);

// Function that will be called within the button's onClick event using the math.random func to shuffle/display a new quote within the array
  const getNewQuotes = () => {
    setQuote(shuffleQuotes(quotes));
  };

  return (
    <div className="content">
      <div className="card">
      <h3 className='quote-text'>
          "{quote.text}"
      </h3>
        <div className='author'>{quote.author}</div>
        <div className='lower'>
        <button
          className="button"
          onClick={getNewQuotes}
        >
        <span>Get Quote</span>
      </button>
        </div>
    </div>
  </div>
  );
}

export default App;
