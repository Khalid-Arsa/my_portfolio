import { useState } from "react";

import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import About from "./components/about/About";

import './app.scss'
import Menu from "./components/menu/Menu";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro/>
        <About/>
        {/* <Portfolio/> */}
        {/* <Works/> */}
        {/* <Testimonial/> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
