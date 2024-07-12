import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/body.css';
import './css/app.css';
import './css/header.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
 <React.StrictMode>
      <App />
 </React.StrictMode>
);


//Importing all necessary dependencies