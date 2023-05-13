
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sections from './Components/Sections';
import Mains from './Components/Mains';
import Menus from './Components/Menus';
// import React_bootstraps from './Components/React_bootstraps'???????????????????????????????????????????
// import 'bootstrap/dist/css/bootstrap.min.css'; ?????????????????????????????????????????????????????
// import Reactbootstrap from './Components/Reactbootstrap';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'/>
        <Route path='/Mains' element={<Mains />} />
        <Route path='/Sections' element={<Sections />} />
        <Route path='/Menus' element={<Menus />} />
        


        {/*<Route path='/Reactbootstrap' element={<Reactbootstrap />} />*/}
        {/*<Route path='/React_bootstraps' element={<React_bootstraps />} />*/}
      </Routes>
    </Router>
  )
}





