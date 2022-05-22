import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Insight from './pages/subpages/Insight';
import IntergrationMetadata from './pages/subpages/IntergrationMetadata';
import AgileDiscoverability from './pages/subpages/AgileDiscoverability';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styling/main.scss'
import CrowdsourcedKnowledge from './pages/subpages/CrowdsourcedKnowledge';
import QualityAssurance from './pages/subpages/QualityAssurance';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/intergration-metadata" element={<IntergrationMetadata />} />
      <Route path="/insight" element={<Insight />} />
      <Route path="/agile-discoverability" element={<AgileDiscoverability />} />
      <Route path="/crowdsourced-knowledge" element={<CrowdsourcedKnowledge />} />
      <Route path="/quality-assurance" element={<QualityAssurance />} />
    </Routes>
  </BrowserRouter>,
);
