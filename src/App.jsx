import { useActivePage, useReveal, useCollapsibleChapters } from './hooks/scroll.js';
import Rail from './components/Rail.jsx';
import Nav from './components/Nav.jsx';
import End from './components/End.jsx';
import Hero from './pages/Hero.jsx';
import Tidslinje from './pages/Tidslinje.jsx';
import Arbetsmiljo from './pages/Arbetsmiljo.jsx';
import Foraldra from './pages/Foraldra.jsx';
import FAQ from './pages/FAQ.jsx';
import Resurser from './pages/Resurser.jsx';
import Kontakt from './pages/Kontakt.jsx';

export default function App() {
  const active = useActivePage();
  useReveal();
  const { openChapter } = useCollapsibleChapters();

  return (
    <>
      <Rail active={active} openChapter={openChapter} />
      <Nav active={active} openChapter={openChapter} />
      <main className="stage">
        <Hero />
        <Tidslinje />
        <Arbetsmiljo />
        <Foraldra />
        <FAQ />
        <Resurser />
        <Kontakt />
        <End />
      </main>
    </>
  );
}
