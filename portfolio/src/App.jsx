import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="antialiased bg-slate-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
