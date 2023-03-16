import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const App = () => {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

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
      <h1 className='header'>Quote Generator</h1>
      <p>{quote?.text}</p>
      <i>- {quote?.author}</i>
      <button
          className="button"
          onClick={getNewQuotes}
        >
        <span>Get Quote</span>
      </button>
    </div>
  </div>
  );
}

export default App;
