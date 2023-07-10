
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import NotFount from './Components/NotFount';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App ">
           <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/skills" element={<Skills />} />
       <Route path="/PortFolio" element={<Project />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="*" element={<NotFount />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
