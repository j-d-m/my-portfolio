import React from "react";

import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font scroll-smooth">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
