import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CountriesPage from './pages/CountriesPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;