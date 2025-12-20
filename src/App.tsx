import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Whitepaper } from './pages/Whitepaper';
import { Blog } from './pages/Blog';
import { Usecases } from './pages/Usecases';
import { ForBusiness } from './pages/ForBusiness';
import { Wip } from './pages/Wip';
import { DownloadApp } from './pages/DownloadApp';
import { NotFound } from './pages/NotFound';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Navbar } from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/usecases" element={<Usecases />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/wip" element={<Wip />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    // Prevent browser from restoring scroll position automatically
    // This allows us to handle it manually in PageTransition for smooth transitions
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'; // Cleanup
      }
    };
  }, []);

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> Removed in favor of PageTransition handling */}
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;