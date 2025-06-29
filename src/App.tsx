import { ThemeProvider } from './contexts/theme-context';
import Header from './components/header';
import About from './components/about';
import ContributionGraph from './components/contribution';
import Experience from './components/experience';
import Projects from './components/projects';
import Socials from './components/socials';
import ThemeToggle from './components/theme-toggle';
import Skills from './components/skills';
import { DotBackgroundDemo } from './components/ui/dot-background';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-gray-900 h-auto dark:text-white transition-colors duration-300 overflow-hidden">
        
        {/* Background dots */}
        <div className="absolute inset-0 -z-10">
          <DotBackgroundDemo />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <ThemeToggle />
          <div className="max-w-4xl mx-auto px-4 py-8 space-y-12 font-outfit">
            <Header />
            <About />
            <ContributionGraph />
            <Skills />
            <Experience />
            <Projects />
            <Socials />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
