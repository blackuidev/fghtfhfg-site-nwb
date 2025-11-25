import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFound from './pages/NotFound';

function App() {
  // --- DEBUGGING ADDITION: Start ---
  // A common scenario for `map` errors is when an array prop is passed as undefined.
  // Let's assume `Navbar` takes a `navItems` prop that it maps over.
  // We'll define a hypothetical array here. If this array were to come from an API
  // or a complex state logic and could be undefined, the error would occur.
  const navigationLinks: { name: string; href: string }[] | undefined = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  // CRITICAL DEBUGGING STEP: Log the value of the variable *before* it's used in a .map()
  // or passed to a component that uses .map().
  // Check your browser's console for this output. If it says 'undefined',
  // then you've found the source of the problem in App.tsx (or upstream logic).
  console.log('App.tsx DEBUG: Value of navigationLinks before passing to Navbar:', navigationLinks);

  // TEMPORARY FIX / DEFENSIVE CODING:
  // When passing `navigationLinks` to `Navbar`, ensure it's always an array.
  // If `navigationLinks` is `undefined` or `null`, `|| []` will provide an empty array,
  // preventing the `map` error in the child component.
  // This allows the app to render (potentially with missing navigation items)
  // and helps isolate the problem. If the website still shows blank after this, the `map` error
  // is likely in another component or page that App.tsx renders, and you'd apply similar checks there.
  const safeNavigationLinks = navigationLinks || [];

  // --- DEBUGGING ADDITION: End ---

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Pass the potentially debugged/safeguarded navigation links to Navbar */}
        <Navbar navItems={safeNavigationLinks} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
