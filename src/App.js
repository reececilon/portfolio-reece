import Loader from './components/loader/Loader';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './assets/styles/index.css';
import { useState, createContext } from 'react'

export const viewContext = createContext();

function App() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="App">
      <viewContext.Provider value={[activeNav, setActiveNav]}>
        <Loader />
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </viewContext.Provider>
    </div>
  );
}

export default App;
