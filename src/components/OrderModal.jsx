const OrderModal = ({ food, close }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded shadow-lg p-6 relative">
        
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-500"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <img
          src={food.img}
          alt={food.name}
          className="h-40 w-full object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-4">{food.name}</h2>
        <p className="text-red-600 font-semibold">{food.price}</p>

        <button
          className="mt-4 w-full bg-[var(--primary)] text-white py-2 rounded"
        >
          Confirm Order <i className="fa-solid fa-bag-shopping ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
