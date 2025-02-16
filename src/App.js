
import './App.css';
import Home from './components/Home';
import Navbar from "./components/header/Navbar"

function App() {
  return (
   <>
 
 <Navbar />
            <div id="home" style={{ height: '105vh',}}>
            <Home />
            </div>
   </>
  );
}

export default App;
