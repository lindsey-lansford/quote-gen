import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const App = () => {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[5]);
      })
  }, []);

  const getNewQuotes = () => {
    setQuote(getRandomQuote(quotes));
  };

  return (
    <div className="content">
      <div className="card">
      <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
      </h3>
        <i>- {quote?.author}</i>
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
