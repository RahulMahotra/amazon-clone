import React from 'react'
import './styles/App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* <div className="App"> */}
          <Route path = "/checkout" element = {<Checkout />}>
          </Route>
          <Route path = "/login" element = {<Login />}>

          </Route>
          
          <Route path = "/" element = {<Home />}> 
          </Route>    
      {/* </div> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;