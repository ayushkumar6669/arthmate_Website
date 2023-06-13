import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Team from './components/Team';
// import AboutPage from './components/AboutPage';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, HomePage,  Team, AboutPage } from "./components";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

