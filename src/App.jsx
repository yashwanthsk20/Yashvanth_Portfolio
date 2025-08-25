import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './header/Header';
import Preloader from './preloader/Preloader';
import MagicCursor from './MagicCursor';
import Home from './home/Home';
import OffcanvasMenu from './Offcanvas';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import PortfolioGatekeeper from './Entryform';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visitorExists, setVisitorExists] = useState(false);

  useEffect(() => {
    // Check if visitor already exists
    const existingVisitor = sessionStorage.getItem('portfolioVisitor');
    setVisitorExists(!!existingVisitor);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVisitorEntry = () => {
    console.log("Visitor entry recorded");
    setVisitorExists(true);
  };

 return (
  <>
    <MagicCursor />
    {loading ? (
      <Preloader />
    ) : (
      <Routes>
        {/* Gatekeeper should render alone */}
        <Route
          path="/gatekeeper"
          element={<PortfolioGatekeeper onVisitorEntry={handleVisitorEntry} />}
        />

        {/* All other pages share layout */}
        <Route
          path="/*"
          element={
            visitorExists ? (
              <>
                <Header />
                <OffcanvasMenu />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
              </>
            ) : (
              <Navigate to="/gatekeeper" replace />
            )
          }
        />
      </Routes>
    )}
  </>
);

};

export default App;
