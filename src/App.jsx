import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
