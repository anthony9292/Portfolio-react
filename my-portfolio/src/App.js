import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works"; 
import Media from "./components/media/Media";
import Reference from "./components/references/References";
import "./app.scss"


function App() {
  return (
    <div className ="app">
    <Topbar/>
    <div className="sections">
    <Intro/>
    <Works/>
    <Media/> 
    <Reference/>
    </div>
    </div>
  );
}

export default App;
