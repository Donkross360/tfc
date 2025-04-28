import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ServiceTimes from './components/ServiceTimes';
import Events from './components/Events';
import PastorMessage from './components/PastorMessage';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { AnimatePresence } from 'framer-motion';

const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Mission />
      <ServiceTimes />
      <Events />
      <PastorMessage />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-navy-900 overflow-x-hidden">
        <AnimatePresence>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/" element={<MainLayout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;