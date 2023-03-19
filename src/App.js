import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './components/common/About';
import Footer from './components/common/Footer';
import Navi from './components/common/Navi';
// import ErrorMessage from './components/errors/ErrorMessage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/landing/Home';
import Video from './components/video/Video';
import VideoCards from './components/video/VideoCards';

// import {useEffect, useState } from 'react'
function App() {
// epiphany: to display all videos the path 
  return (
    <Router>
      <Navi />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoCards />} />
        <Route path="/videos/:id" element={<Video />} />
        {/* the colon is a placeholder expecting the id */}
        <Route path="/about" element={<About />} />
    </Routes>
    </main>
    <Footer />
    </Router>
  )
}

export default App;
