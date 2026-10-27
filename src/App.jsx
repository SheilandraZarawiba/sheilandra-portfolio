import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AmbientBackground from "./components/AmbientBackground.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <AmbientBackground />
      <a className="skip" href="#main">Lewati ke konten</a>
      <Navbar theme={theme} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <main id="main">
        <Hero theme={theme} />
        <About />
        <Skills theme={theme} />
        <Projects />
        <Achievements />
        <Contact theme={theme} />
      </main>
      <Footer />
    </>
  );
}
