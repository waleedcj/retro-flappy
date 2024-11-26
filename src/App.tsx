import { useRef } from "react";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import { PersonalBestProvider } from "./context/Personalbest";
import { ToastProvider } from "./context/ToastProvider";
import FloatingContractAddress from "./components/ContractAddr";
import Scoreboard from "./components/Scoreboard";

function App() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  // const scoreboardRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current && navbarRef.current) {
      const navbarHeight = navbarRef.current.getBoundingClientRect().height;
      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = sectionTop - navbarHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <PersonalBestProvider>
      <ToastProvider>
        <div className="flex flex-col min-h-screen bg-slate-900">
          <Navbar
            navbarRef={navbarRef}
            onGameClick={() => scrollToSection(gameRef)}
            // onScoreboardClick={() => scrollToSection(scoreboardRef)}
            onRoadmapClick={() => scrollToSection(roadmapRef)}
            onAboutClick={() => scrollToSection(aboutRef)}
          />
          <main className="flex-grow space-y-32">
            {/* <div ref={homeRef}><Home /></div> */}
            <div ref={gameRef}>
              <Game />
            </div>
            <div>
              <Scoreboard />
            </div>
            <div ref={roadmapRef}>
              <Roadmap />
            </div>
            <div ref={aboutRef}>
              <About />
            </div>
          </main>
          <footer className="bg-purple-600 text-white p-4 mt-4 text-center">
            <p>&copy; 2024 FlapySol. All rights reserved.</p>
          </footer>
          <FloatingContractAddress />
        </div>
      </ToastProvider>
    </PersonalBestProvider>
  );
}

export default App;
