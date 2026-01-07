import { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import ContactSection from "./components/ContactSection";

/* ✅ THIS COMPONENT CAN USE useCart */
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

/* ✅ PROVIDER LIVES HERE */
function App() {
  const [dark, setDark] = useState(false);

  return (
    <CartProvider>
      <AppContent
        dark={dark}
        toggleDark={() => setDark(!dark)}
      />
    </CartProvider>
  );
}

export default App;
