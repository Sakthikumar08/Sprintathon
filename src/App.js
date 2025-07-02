import React from 'react';
import Navbar from "./components/header/Navbar";
import Home from './components/Home';
import Domain from './components/Domain';
import Prize from "./components/Prize";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Contact from './components/Contact';
import Ourteam from "./components/Ourteam";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="domain">
          <Domain />
        </section>
        
        <section id="prize">
          <Prize />
        </section>
        
        <section id="sponsors" style={{height:"160vh"}}>
          <Sponsors />
        </section>
        
        <section id="rules" style={{height:"175vh"}} >
          <Rules />
        </section>
        
        <section id="contact" style={{height:"200vh"}}>
          <Contact />
        </section>
        
        {/* <section id="ourteam">
          <Ourteam />
        </section> */}
      </main>
    </div>
  );
}

export default App;