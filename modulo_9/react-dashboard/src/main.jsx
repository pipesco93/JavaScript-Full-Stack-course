import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
