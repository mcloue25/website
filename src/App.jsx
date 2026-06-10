import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Snapshot } from "./components/Snapshot";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Publications />
        <Projects />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
