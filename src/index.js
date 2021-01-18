import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./search";
import Heading from "./heading";
import Weather from "./weather";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
 <Heading />
      <Search temperature="19" />
      <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
