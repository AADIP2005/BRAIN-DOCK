import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Start from './components/start';
import Hero from './components/Hero';
import About from './components/about';
import Footer from './components/Footer';


import Resources from './components/Resources/Resources';
import CSE from './components/Resources/CSE/cse';
import CSEAI from './components/Resources/CSE/cseai';
import ECE from './components/Resources/ece';
import ECEAI from './components/Resources/eceai';
import MAE from './components/Resources/mae';
import Readit from './components/readit';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
           
            <Route path="/Resources" element={<Resources/>}/>
            <Route path="/cse" element={<CSE/>}/>
            <Route path="/cseai" element={<CSEAI/>}/>
            <Route path="/ece" element={<ECE/>}/>
            <Route path="/eceai" element={<ECEAI/>}/>
            <Route path="/mae" element={<MAE/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/start" element={<Start/>}/>
            <Route path="/readit" element={<Readit/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;




