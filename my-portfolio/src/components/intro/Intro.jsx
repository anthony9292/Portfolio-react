import "./intro.scss";

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
              <div className="imgContainer">
                  <img src="assets/cover.png" alt=""/>
                  </div>
              </div>
             <div className="right">
        <div className="wrapper">
          <h2>Hello, and welcome</h2>
          <h1>to my Web</h1>
          <h3> Portfolio<span></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downarrow.png" alt=""/>
        </a>
      </div>
    </div>
    );
}
