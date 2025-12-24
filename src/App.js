import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SolutionsPage from './pages/SolutionsPage';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/solutions' element={<SolutionsPage />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
