import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
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
    </BrowserRouter>
  );
};

export default App;