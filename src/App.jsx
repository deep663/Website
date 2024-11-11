import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ContactUsPage from './pages/ContactUsPage';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
