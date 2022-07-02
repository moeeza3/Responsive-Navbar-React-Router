import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './section/Home';
import About from './section/About';
import Services from './section/Services';
import Contact from './section/Contact';
import Project from './section/Project';
import Bootstrap from './section/Bootstrap';
import Reactjs from './section/Reactjs';
import './App.css';

function App() {
  return (
   
    <>
    <Navbar/>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/about"  element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/reactjs" element={<Reactjs/>} />
    <Route path="/bootstrap" element={<Bootstrap/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>

  );
}

export default App;
