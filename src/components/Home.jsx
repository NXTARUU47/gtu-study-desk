import React from "react";
import Hero from "./Hero";
import About from "./About";
import StudyMaterials from "./StudyMaterials";
import Contact from "./Contact";
import AIHelp from "./AIHelp";

function Home({ darkMode }) {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <StudyMaterials darkMode={darkMode} />
      <AIHelp/>
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default Home;