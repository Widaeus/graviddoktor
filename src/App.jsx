import { useActivePage, useReveal } from './hooks/scroll.js';
import Rail from './components/Rail.jsx';
import Nav from './components/Nav.jsx';
import End from './components/End.jsx';
import Hero from './pages/Hero.jsx';
import Arbetsmiljo from './pages/Arbetsmiljo.jsx';
import Foraldra from './pages/Foraldra.jsx';
import Ersattning from './pages/Ersattning.jsx';
import Avstangning from './pages/Avstangning.jsx';
import FAQ from './pages/FAQ.jsx';
import Resurser from './pages/Resurser.jsx';
import Kontakt from './pages/Kontakt.jsx';

export default function App() {
  const active = useActivePage();
  useReveal();

  return (
    <>
      <Rail active={active} />
      <Nav active={active} />
      <main className="stage">
        <Hero />
        <Arbetsmiljo />
        <Foraldra />
        <Ersattning />
        <Avstangning />
        <FAQ />
        <Resurser />
        <Kontakt />
        <End />
      </main>
    </>
  );
}
