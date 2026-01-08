import { useState, useEffect, lazy, Suspense } from "react";
import { CartProvider, useCart } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";

import loading from "./assets/images/loading.png";

/* 🔥 LAZY LOADED (heavy components) */
const Menu = lazy(() => import("./components/Menu"));
const About = lazy(() => import("./components/About"));
const ContactSection = lazy(() => import("./components/ContactSection"));

/* ✅ CONTENT COMPONENT */
function AppContent({ dark, toggleDark }) {
  const { showCheckout } = useCart();

  return (
    <div className={dark ? "dark" : ""}>
      <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Navbar toggleDark={toggleDark} />
        <Hero />

        {/* Lazy Sections */}
        <Suspense fallback={null}>
          <Menu />
          <About />
          <ContactSection />
        </Suspense>

        <Cart />
        {showCheckout && <CheckoutModal />}
        <Footer />
      </div>
    </div>
  );
}

/* ✅ MAIN APP */
function App() {
  const [dark, setDark] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  /* 🚀 FAST NON-BLOCKING LOADER */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setLoadingScreen(false);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* 🔥 LOADER */}
      {loadingScreen && (
        <div className="loader-bg">
          <img
            src={loading}
            alt="Loading..."
            className="loader-img"
          />
        </div>
      )}

      {/* 🔥 APP */}
      <CartProvider>
        <AppContent
          dark={dark}
          toggleDark={() => setDark(!dark)}
        />
      </CartProvider>
    </>
  );
}

export default App;
