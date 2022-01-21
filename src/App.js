import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from "./components/Footer"
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'
import Projects from "./pages/Projects"
import React, {useState} from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("isOpen: "+ isOpen);
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <MobileNav isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
        </Routes>

        <Footer />
      </Router>
    </>

  );
}

export default App;
