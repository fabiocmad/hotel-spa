import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HotelsList from './pages/HotelsList';
import HotelDetail from './pages/HotelDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Hotels List */}
        <Route path="/hotels" element={<HotelsList />} />

        {/* Route for Hotel Detail */}
        <Route path="/hotels/:id" element={<HotelDetail />} />

        {/* Redirect any other URL to /hotels */}
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
    </Router>
  );
}

export default App;
