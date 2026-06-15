import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmailMarketingAgent from './pages/products/EmailMarketingAgent';
import VoiceAgent from './pages/products/VoiceAgent';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/email-marketing-agent" element={<EmailMarketingAgent />} />
        <Route path="/products/voice-agent" element={<VoiceAgent />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
