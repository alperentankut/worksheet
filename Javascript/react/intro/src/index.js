import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css" //bu dizin node_modules klasörü içinde

const root = ReactDOM.createRoot(document.getElementById('root')); 
//bizim public klasörümüzde index.html imiz var. Yukardaki kod aslında bizim app.js de yaptığımız
//değişiklikleri index.html e render et diyor. Aslında bütün projemiz tek sayfa üzerinden yürüyor
//o da index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//