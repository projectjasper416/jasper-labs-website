import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmailMarketingAgent from './pages/products/EmailMarketingAgent';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/email-marketing-agent" element={<EmailMarketingAgent />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
