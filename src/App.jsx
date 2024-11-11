import "../src/SCSS/style.css"
import Header from "./companents/headerfolder/Header";
import React from "react";
import Coffe from "./companents/main/SectionBackground";
import Feature from "./companents/main/sectionFeature";
import About from "./companents/main/sectionAbout";
import OurServices from "./companents/main/ourservices";
function App() {
  return (
    <div className="App">
    <Header/>
    <Coffe/>
    <Feature/>
    <About/>
    <OurServices/>
    </div>
  );
}

export default App;
