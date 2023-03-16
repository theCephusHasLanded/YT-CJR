import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './components/common/About';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
// import ErrorMessage from './components/errors/ErrorMessage';
import Home from './components/landing/Home';
import Video from './components/video/Video';

// import {useEffect, useState } from 'react'
function App() {

  return (
    <Router>
      <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
    </Routes>
    </main>
    <Footer />
    </Router>
  )
}

export default App;
