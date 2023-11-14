import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Backend from './Backend';
import Frontend from './Frontend';
import Python from './Python';
import Html from './Html';
import './home.css';
import Javascriptpage from './Javascriptpage';

export default function Routepage() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}>
            <Route path="Frontend" element={<Frontend />}>
              <Route path="Html" element={<Html />} />
              <Route path="Javascriptpage" element={<Javascriptpage />} />
            </Route>
            <Route path="Backend" element={<Backend />}>
              <Route path="Python" element={<Python />} />
            </Route>
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
