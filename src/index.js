import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from "react-router-dom";
import {ProductProvider} from './components/Context';


ReactDOM.render(
 <ProductProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
 </ProductProvider>,
  document.getElementById('root')
);
