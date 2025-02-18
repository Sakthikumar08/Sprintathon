
import './App.css';
import Home from './components/Home';
import Navbar from "./components/header/Navbar";
import Domain from './components/Domain';
import Contact from './components/Contact';

function App() {
  return (
   <>
 
 <Navbar />
            <div id="home" style={{ height: '105vh',}}>
            <Home />
            </div>
            <div id="Domain" style={{ height: '105vh',}}>
            <Domain />
            </div>
            <div id="contact" style={{ height: '105vh',}}>
            <Contact />
            </div>
             
   </>
  );
}

export default App;
