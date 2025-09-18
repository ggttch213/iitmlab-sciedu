import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './other/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './navbar';
import OcRouter from "./pages/ocRouter"
import Footer from "./footer"
import{ BrowserRouter as Router} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <NavScrollExample />
    <OcRouter />
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
