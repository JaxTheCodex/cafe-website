import { useCart } from "../context/CartContext";
import { useState, useCallback, memo } from "react";

const NAV_ITEMS = ["home", "menu", "about", "contact"];

const Navbar = () => {
  const { cart, setShowCart } = useCart();
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[var(--primary)] text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl select-none">
          ☕ Tea Point Cafe
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {NAV_ITEMS.map(item => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="cursor-pointer hover:text-yellow-300 transition"
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex gap-4 items-center">
          
          {/* 📅 Reserve Table */}
          <button
            onClick={() => scrollTo("reserve")}
            className="
              hidden sm:flex items-center gap-2
              bg-orange-600 text-white
              px-4 py-1.5 rounded-full
              text-sm font-semibold
              hover:bg-orange-700
              transition shadow-md
            "
          >
            <i className="fa-solid fa-calendar-check"></i>
            Reserve
          </button>

          {/* 🛒 Cart */}
          <button
            className="relative"
            aria-label="Open cart"
            onClick={() => setShowCart(true)}
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden px-6 overflow-hidden transition-all duration-300
          ${open ? "max-h-72 opacity-100 pb-4" : "max-h-0 opacity-0"}
        `}
      >
        {NAV_ITEMS.map(item => (
          <p
            key={item}
            onClick={() => scrollTo(item)}
            className="py-2 cursor-pointer hover:text-yellow-300 transition"
          >
            {item.toUpperCase()}
          </p>
        ))}

        {/* Mobile Reserve Button */}
        <button
          onClick={() => scrollTo("reserve")}
          className="
            mt-3 w-full
            bg-orange-600 text-white
            py-2 rounded-full
            font-semibold
            hover:bg-orange-700
            transition
          "
        >
          <i className="fa-solid fa-calendar-check"></i> Reserve Table
        </button>
      </div>
    </nav>
  );
};

export default memo(Navbar);
