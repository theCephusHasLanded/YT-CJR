
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/common/About';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
// import ErrorMessage from './components/errors/ErrorMessage';
import Home from './components/landing/Home';
import View from './components/video/View';

import {useEffect, useState } from 'react'
function App() {

  const [number, setNumber] = useState(1)
  const [todo, setTodo] = useState('')


  //* THIS IS JUST DUMMY PLACEHOLDER TO CONFIGURE THE USEEFFECT.
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos${number}`).then(response => response.json()).then(json => MediaStreamAudioDestinationNode(json.title))
  // }, [number])
 
  return (
    <Router>
      <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<View />} />
    </Routes>
    </main>
    <Footer />
    </Router>
  )
}

export default App;
