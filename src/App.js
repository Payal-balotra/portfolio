import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIIntegration from './components/AIIntegration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

const App = () => {
  const [view, setView] = React.useState('portfolio');

  return (
    <div className="bg-darker min-h-screen text-gray-100 selection:bg-secondary selection:text-white">
      {view === 'portfolio' ? (
        <>
          <Header setView={setView} currentView={view} />
          <main className="pt-20">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <AIIntegration />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <nav className="fixed top-0 w-full bg-darker/80 backdrop-blur-md z-50 border-b border-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <span className="text-2xl font-bold text-primary cursor-pointer" onClick={() => setView('portfolio')}>PB.</span>
              <button
                onClick={() => setView('portfolio')}
                className="px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                ← Back to Portfolio
              </button>
            </div>
          </nav>
          <div className="pt-20">
            <Resume />
          </div>
        </>
      )}
    </div>
  );
}

export default App; 