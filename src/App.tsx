import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ServiceTimes from './components/ServiceTimes';
import Events from './components/Events';
import PastorMessage from './components/PastorMessage';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="font-sans text-navy-900 overflow-x-hidden">
      <Navbar />
      <AnimatePresence>
        <main>
          <Hero />
          <Mission />
          <ServiceTimes />
          <Events />
          <PastorMessage />
          <Testimonials />
          <CallToAction />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;