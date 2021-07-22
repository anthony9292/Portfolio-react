import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Media from "./components/media/Media"
import Contact from "./components/contact/Contact"
import "./app.scss"

import { useState } from "react";
import Menu from "./components/menu/Menu";




function App() {
///initial stage for menu open///
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className ="app">
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <div className="sections">
     <Intro/>
     <Works/>
     <Media/>
     <Contact/>
   </div>
   </div>
    );

  }
export default App;