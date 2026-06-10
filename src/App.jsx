import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import {Publications} from "./components/Publications"
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Publications />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
