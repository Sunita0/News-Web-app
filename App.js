import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Signin'; // Ensure these components are correctly imported
import Signup from './Signup';
import News from './News';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar stays outside Routes to show on all pages */}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
