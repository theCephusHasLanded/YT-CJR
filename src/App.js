
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/common/About';
import Footer from './components/common/Footer';
 import Nav from './components/common/Nav';
// import ErrorMessage from './components/errors/ErrorMessage';
 import Home from './components/home/Home';
//  import { Link, NavLink } from 'react-router-dom';
// import View from './components/video/View';


function App() {
 
  return (
    <div className="App">
      <header>
        "Header"  
    {/* <Header /> */}
        <Nav />
      </header>
    <About /> 
    <main>
      <h1>CJR You Tube Clone Class Project</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </main>
    <div className="footer">
      <Footer />
    </div>

    </div>
    
  )
}

export default App;
