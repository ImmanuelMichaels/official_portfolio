import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Hero from './Components/Hero';
// Uncomment these when your pages are ready
// import Header from './components/Header';
// import About from './pages/About';
// import News from './pages/News';
// import Careers from './pages/Careers';
// import Inclusion from './pages/Inclusion';
// import Investors from './pages/Investors';
// import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Add your routes back when your components are ready */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/inclusion-impact" element={<Inclusion />} />
        <Route path="/investors" element={<Investors />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
