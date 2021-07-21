import Topbar from "./components/topbar/Topbar";
import About from "./components/aboutme/About";
import Works from "./components/works/Works"; 
import Media from "./components/media/Media";
import Reference from "./components/references/references";


function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
    <About/>
    <Works/>
    <Media/> 
    <Reference/>
    </div>
    </div>
  );
}

export default App;
