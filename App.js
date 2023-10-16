
import './App.css';
import { useState,useEffect } from 'react';
import {TiSocialTwitter} from 'react-icons/ti';
function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();}, []);
  const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuoteInfo({
        text:data.content,
        author:data.author,
      });
    });
  };
  return (
    <div className= "App" >
      <div id ="quote-box">
      {/* <head>Random Quote Generator</head> */}
        <p id ="text" className='onetwo'>{quoteInfo.text}</p>
        <p id ="author" className='twoone'>{quoteInfo.author}</p>
        <div className="social">
                <a href={`https://twitter.com/intent/tweet?text=${quoteInfo.text}`} id="tweet" target={""} >
                    <button id="new-quote">Tweet</button>
                </a>
            </div>
        <button id = "new-quote" onClick={getQuote}>
          New Quote 
        </button>
        <span><img className='hello' src={require('./123.jpeg')}></img></span>
      </div>
    </div>
  )
}

export default App;
