import { useState, useEffect } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import ContactSection from "./components/ContactSection";

import loading from "../src/assets/images/loading.png";

/* ✅ CONTENT COMPONENT */
function AppContent({ dark, toggleDark }) {
  const { showCheckout } = useCart();

  return (
    <div className={dark ? "dark" : ""}>
      <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Navbar toggleDark={toggleDark} />
        <Hero />
        <Menu />
        <Cart />
        {showCheckout && <CheckoutModal />}
        <About />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

/* ✅ MAIN APP */
function App() {
  const [dark, setDark] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoadingScreen(false);
      }, 1200); // 👈 smooth delay
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
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


      {/* 🔥 WEBSITE */}
      {!loadingScreen && (
        <CartProvider>
          <AppContent
            dark={dark}
            toggleDark={() => setDark(!dark)}
          />
        </CartProvider>
      )}
    </>
  );
}

export default App;
