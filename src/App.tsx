import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import Panda from './pages/Panda/Panda';
import Gorilla from './pages/Gorilla/Gorilla';
import Alligator from './pages/Alligator/Alligator';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/panda" element={<Panda />} />
          <Route path="/gorilla" element={<Gorilla />} />
          <Route path="/alligator" element={<Alligator />} />
          <Route path="/eagle" element={<Alligator />} />
          {/*      <Route path="/:id" element={<CardPage />} />
        <Route path="/form" element={<FormPage />} />
        
        <Route path="/*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
