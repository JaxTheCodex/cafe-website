import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { cart, setShowCart } = useCart();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[var(--primary)] text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">☕ Tea Point Cafe</h1>

        <ul className="hidden md:flex gap-6">
          {["home","menu","about","contact"].map(item => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="cursor-pointer"
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          {/* 🛒 CART BUTTON */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          {["home","menu","about","contact"].map(item => (
            <p key={item} onClick={() => scrollTo(item)} className="py-2">
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
