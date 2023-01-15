import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          {/*      <Route path="/:id" element={<CardPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
