import { useState } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Works from "./components/works/Works";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro/>
        <About/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
