
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Main from './Components/Main';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/Main' element={<Main />} />
        <Route path='/Section' element={<Section />} />
  {/*<Route path='/React_bootstrap' element={<React_bootstrap />} />*/}

      </Routes>

    </Router>
  )
}



