import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Founders from './pages/Founders';
import EmailMarketingAgent from './pages/products/EmailMarketingAgent';
import VoiceAgent from './pages/products/VoiceAgent';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/products/email-marketing-agent" element={<EmailMarketingAgent />} />
        <Route path="/products/voice-agent" element={<VoiceAgent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

