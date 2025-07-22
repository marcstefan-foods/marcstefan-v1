import React from 'react';
import Layout from './components/Layout'; 
import LandingPage from './pages/LandingPage';
import Restuarant from './pages/Restuarant'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/restaurant" element={<Restuarant />} />
        </Routes>
        </Layout>
      </Router>
    
  );
};

export default App;