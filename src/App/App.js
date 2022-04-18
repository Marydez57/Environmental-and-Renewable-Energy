
import Navbar from '../Components/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Components/Pages/Home';
import About from '../Components/Pages/About';
import Services from '../Components/Pages/Services';
import Contact from '../Components/Pages/Contact';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
  </Router>
    </>
  );
}

export default App;
