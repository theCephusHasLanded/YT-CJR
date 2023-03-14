
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/common/About';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
// import ErrorMessage from './components/errors/ErrorMessage';
import Home from './components/landing/Home';
import View from './components/video/View';


function App() {
 
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
