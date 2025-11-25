import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Imports
import HomePage from './pages/Index'; // Using existing Index.tsx for the home page
import NotFoundPage from './pages/NotFound'; // Using existing NotFound.tsx for 404
// Placeholder imports for other pages - assume these will be created in src/pages/
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Component Imports - assume these will be created in src/components/ui/
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

import './App.css'; // Keep existing CSS import

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Render Navbar globally across all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 Not Found */}
      </Routes>
      <Footer /> {/* Render Footer globally across all routes */}
    </BrowserRouter>
  );
}

export default App;
