import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './components/common/About';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
// import ErrorMessage from './components/errors/ErrorMessage';
import Home from './components/landing/Home';
import Video from './components/video/Video';
import VideoCards from './components/video/VideoCards';

// import {useEffect, useState } from 'react'
function App() {
// epiphany: to display all videos the path 
  return (
    <Router>
      <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoCards />} />
        <Route path="/video/:id" element={<Video />} />
        {/* the colon is a placeholder expecting the id */}
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<View />} />
        
    </Routes>
    </main>
    <Footer />
    </Router>
  )
}

export default App;

// app.js is the brain.  
/* Routes are displayed in the url segment. The element says what is going
to be displayed */
