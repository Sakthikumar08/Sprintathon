import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from "./components/header/Navbar";
import Domain from './components/Domain';
import Prize from "./components/Prize";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Domain />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
