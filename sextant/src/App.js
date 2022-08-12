import React from 'react';
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './Card';
import UsersIPaddress from './UsersIPaddress';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/services" element={<h1>Our Services</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
        </Routes>
      </BrowserRouter>
      <Banner />
      <Card />
    </div>
  );
}

export default App;
