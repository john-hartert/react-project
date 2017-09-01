import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
global.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
// import './index.css';


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

