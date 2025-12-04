import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Portal from './components/Portal';

const books = [
  {title: "Tomek w krainie kangurów", description: "xxxxx"},
  {title: "Czerwonoskóry generał", description: "xxxxx"},
  {title: "Władca pierścieni drużyna pierścienia", description: "xxxxx"},
  {title: "Pan Tadeusz", description: "xxxxx"},
  {title: "Dżuma", description: "xxxxx"}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portal books={books}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
