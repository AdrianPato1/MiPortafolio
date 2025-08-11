import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutTimeline from './components/AboutTimeline';
import Trajectory from './components/Trajectory';
import CallToAction from './components/CallToAction';

import Footer from './components/Footer';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutTimeline />
<Trajectory />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}