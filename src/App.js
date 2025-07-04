import Navbar from "./components/header/Navbar"
import Home from "./components/Home"
import Domain from "./components/Domain"
import Prize from "./components/Prize"
import Rules from "./components/Rules"
import Sponsors from "./components/Sponsors"
import Contact from "./components/Contact"
import "./App.css"
import FuturisticBackground from "./components/Background"

function App() {
  return (
    <div className="app">
      <FuturisticBackground />
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

        <section id="sponsors" className="h-[160vh] max-[668px]:h-[115vh]">
          <Sponsors />
        </section>

        <section id="rules" className="h-[110vh] max-[668px]:h-[90vh]">
          <Rules />
        </section>

        <section id="contact" style={{ height: "200vh" }}>
          <Contact />
        </section>

        {/* <section id="ourteam">
          <Ourteam />
        </section> */}
      </main>
    </div>
  )
}

export default App
