import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, showCart, setShowCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace("₹", "")) * item.qty,
    0
  );

  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  // Replace with your actual WhatsApp number
  const whatsappNumber = "91XXXXXXXXXX";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I want to place an order worth ₹${total}`;

  return (
    <>
      {/* 🌑 BACKDROP */}
      {showCart && (
        <div
          onClick={() => setShowCart(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* 🛒 CART DRAWER */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[90%] sm:w-[420px]
          bg-[#111] text-white z-50
          transform transition-transform duration-300
          flex flex-col
          ${showCart ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-white/20 flex-shrink-0">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setShowCart(false)} className="text-xl">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {cart.length === 0 ? (
            <p className="text-center opacity-60">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-white/10 pb-4">
                <img src={item.img} className="w-16 h-16 rounded object-cover" />

                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 bg-white/20 rounded hover:bg-white/30 transition"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 bg-white/20 rounded hover:bg-white/30 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-500 transition">
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/20 flex-shrink-0 space-y-3">
          <div className="flex justify-between font-semibold mb-2">
            <span>Total</span>
            <span className="text-orange-400">₹{total}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-orange-600 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
            Checkout
          </button>

          {/* WhatsApp Order Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center border border-green-500 text-green-500 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            📱 Order via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Cart;
