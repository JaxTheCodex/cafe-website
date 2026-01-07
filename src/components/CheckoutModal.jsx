import { useCart } from "../context/CartContext";

const CheckoutModal = () => {
  const { cart, setShowCheckout, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace("₹","")) * item.qty,
    0
  );

  const whatsappMessage = encodeURIComponent(
    `☕ Tea Point Cafe Order\n\n` +
    cart.map(i => `${i.name} x${i.qty}`).join("\n") +
    `\n\nTotal: ₹${total}`
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl w-[90%] max-w-md">
        <h3 className="text-xl font-bold mb-4">Confirm Order</h3>

        <p className="opacity-70 mb-4">
          You will be redirected to WhatsApp to place your order.
        </p>

        <a
          href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
          target="_blank"
          className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-full mb-3"
        >
          📱 Order via WhatsApp
        </a>

        <button
          onClick={() => {
            clearCart();
            setShowCheckout(false);
          }}
          className="w-full py-2 border rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
