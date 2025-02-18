import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from "./components/header/Navbar";
import Domain from './components/Domain';
import Prize from "./components/Prize";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Contact from './components/Contact';
import Ourteam from "./components/Ourteam";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourteam" element={<Ourteam />} />
      </Routes>
    </Router>
  );
}

export default App;
